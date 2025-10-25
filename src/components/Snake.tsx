"use client";

import * as React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

interface SnakeProps {
  theme: "Neon" | "Retro" | "Minimal" | "Galaxy";
  gridSize: number;
  speed: "Slow" | "Medium" | "Fast" | "Lightning";
  showScore: boolean;
  autoPlay: boolean;
}

interface Position {
  x: number;
  y: number;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const THEMES = {
  Neon: {
    background: "linear-gradient(45deg, #0a0a0a, #1a1a2e)",
    snake: "#00ff41",
    food: "#ff073a",
    grid: "rgba(0, 255, 65, 0.1)",
    glow: "0 0 20px",
    text: "#00ff41",
  },
  Retro: {
    background: "linear-gradient(45deg, #2c1810, #8b4513)",
    snake: "#ffa500",
    food: "#ff6347",
    grid: "rgba(255, 165, 0, 0.2)",
    glow: "0 0 15px",
    text: "#ffa500",
  },
  Minimal: {
    background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)",
    snake: "#333333",
    food: "#ff4444",
    grid: "rgba(51, 51, 51, 0.1)",
    glow: "0 0 10px",
    text: "#333333",
  },
  Galaxy: {
    background: "linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)",
    snake: "#e94560",
    food: "#f39c12",
    grid: "rgba(233, 69, 96, 0.15)",
    glow: "0 0 25px",
    text: "#e94560",
  },
};

const SPEEDS = {
  Slow: 200,
  Medium: 150,
  Fast: 100,
  Lightning: 50,
};

export const Snake = ({
  theme,
  gridSize,
  speed,
  showScore,
  autoPlay,
}: SnakeProps) => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  const currentTheme = THEMES[theme];
  const gameSpeed = SPEEDS[speed];

  // Generate random food position
  const generateFood = useCallback(() => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    } while (
      snake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }, [snake, gridSize]);

  // Create particle effect
  const createParticles = useCallback((x: number, y: number) => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      x: x + Math.random() * 20 - 10,
      y: y + Math.random() * 20 - 10,
      id: particleIdRef.current++,
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 1000);
  }, []);

  // Auto-pilot AI for demo
  const getAIDirection = useCallback((): Direction => {
    const head = snake[0];
    const dx = food.x - head.x;
    const dy = food.y - head.y;

    // Simple AI: move towards food, avoid walls and self
    const possibleMoves: Direction[] = [];

    if (dx > 0 && head.x + 1 < gridSize) possibleMoves.push("RIGHT");
    if (dx < 0 && head.x - 1 >= 0) possibleMoves.push("LEFT");
    if (dy > 0 && head.y + 1 < gridSize) possibleMoves.push("DOWN");
    if (dy < 0 && head.y - 1 >= 0) possibleMoves.push("UP");

    // Filter out moves that would hit the snake body
    const safeMoves = possibleMoves.filter((dir) => {
      let newX = head.x;
      let newY = head.y;

      switch (dir) {
        case "UP":
          newY--;
          break;
        case "DOWN":
          newY++;
          break;
        case "LEFT":
          newX--;
          break;
        case "RIGHT":
          newX++;
          break;
      }

      return !snake.some((segment) => segment.x === newX && segment.y === newY);
    });

    return safeMoves.length > 0 ? safeMoves[0] : possibleMoves[0] || direction;
  }, [snake, food, gridSize, direction]);

  // Game logic
  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      // Use AI direction if autoPlay is enabled
      const currentDirection = autoPlay ? getAIDirection() : direction;

      // Move head
      switch (currentDirection) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
      }

      // Check wall collision
      if (
        head.x < 0 ||
        head.x >= gridSize ||
        head.y < 0 ||
        head.y >= gridSize
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      // Check self collision
      if (
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10);
        setFood(generateFood());
        createParticles(head.x * 20 + 10, head.y * 20 + 10);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [
    direction,
    gameOver,
    isPlaying,
    food,
    gridSize,
    generateFood,
    createParticles,
    autoPlay,
    getAIDirection,
  ]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (autoPlay) return; // Ignore input in autoplay mode

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        case " ":
          e.preventDefault();
          setIsPlaying((prev) => !prev);
          break;
        case "r":
        case "R":
          resetGame();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, autoPlay]);

  // Game loop
  useEffect(() => {
    if (isPlaying && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, gameSpeed);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPlaying, gameOver, moveSnake, gameSpeed]);

  const resetGame = () => {
    setSnake([{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }]);
    setFood({ x: Math.floor(gridSize * 0.75), y: Math.floor(gridSize * 0.75) });
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setParticles([]);
    setIsPlaying(autoPlay);
  };

  const togglePlay = () => {
    if (gameOver) {
      resetGame();
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        background: currentTheme.background,
        borderRadius: "15px",
        fontFamily: "'Courier New', monospace",
        color: currentTheme.text,
        boxShadow: `${currentTheme.glow} ${currentTheme.snake}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "15px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            textShadow: `${currentTheme.glow} ${currentTheme.text}`,
            animation: gameOver ? "pulse 1s infinite" : "none",
          }}
        >
          🐍 SNAKE {theme.toUpperCase()}
        </h2>
        {showScore && (
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textShadow: `${currentTheme.glow} ${currentTheme.text}`,
            }}
          >
            SCORE: {score}
          </div>
        )}
      </div>

      {/* Game Canvas */}
      <div
        ref={canvasRef}
        style={{
          position: "relative",
          width: `${gridSize * 20}px`,
          height: `${gridSize * 20}px`,
          border: `2px solid ${currentTheme.snake}`,
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.3)",
          boxShadow: `inset ${currentTheme.glow} ${currentTheme.snake}`,
          overflow: "hidden",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
            linear-gradient(${currentTheme.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${currentTheme.grid} 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${segment.x * 20}px`,
              top: `${segment.y * 20}px`,
              width: "18px",
              height: "18px",
              backgroundColor: currentTheme.snake,
              borderRadius: index === 0 ? "50%" : "4px",
              border: index === 0 ? `2px solid ${currentTheme.text}` : "none",
              boxShadow: `${currentTheme.glow} ${currentTheme.snake}`,
              transform: index === 0 ? "scale(1.1)" : "scale(1)",
              transition: "all 0.1s ease",
              zIndex: 10,
            }}
          >
            {index === 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "8px",
                  color: currentTheme.background,
                }}
              >
                👁
              </div>
            )}
          </div>
        ))}

        {/* Food */}
        <div
          style={{
            position: "absolute",
            left: `${food.x * 20}px`,
            top: `${food.y * 20}px`,
            width: "18px",
            height: "18px",
            backgroundColor: currentTheme.food,
            borderRadius: "50%",
            boxShadow: `${currentTheme.glow} ${currentTheme.food}`,
            animation: "bounce 0.6s infinite alternate",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
          }}
        >
          🍎
        </div>

        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: "absolute",
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: "4px",
              height: "4px",
              backgroundColor: currentTheme.food,
              borderRadius: "50%",
              animation: "particle 1s ease-out forwards",
              zIndex: 15,
            }}
          />
        ))}

        {/* Game Over Overlay */}
        {gameOver && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                marginBottom: "10px",
                textShadow: `${currentTheme.glow} ${currentTheme.text}`,
              }}
            >
              💀 GAME OVER 💀
            </div>
            <div
              style={{
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              Final Score: {score}
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            padding: "10px 20px",
            backgroundColor: currentTheme.snake,
            color: currentTheme.background,
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: `${currentTheme.glow} ${currentTheme.snake}`,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {gameOver ? "🔄 RESTART" : isPlaying ? "⏸️ PAUSE" : "▶️ PLAY"}
        </button>

        {!autoPlay && (
          <div
            style={{
              fontSize: "12px",
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            Use WASD or Arrow Keys • Space to Pause • R to Restart
          </div>
        )}

        {autoPlay && (
          <div
            style={{
              fontSize: "12px",
              opacity: 0.8,
              color: currentTheme.food,
              fontWeight: "bold",
            }}
          >
            🤖 AUTO-PILOT MODE
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes particle {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0)
              translate(
                ${Math.random() * 40 - 20}px,
                ${Math.random() * 40 - 20}px
              );
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
