import { Snake } from "../../components/Snake";

export default function SnakeDemo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2.5rem",
          textAlign: "center",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          marginBottom: "10px",
        }}
      >
        🐍 Snake Game Demo
      </h1>

      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "1.1rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        Découvrez notre composant Snake interactif avec différents thèmes et
        modes de jeu !
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Neon Theme */}
        <div>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            🌟 Thème Neon
          </h3>
          <Snake
            theme="Neon"
            gridSize={15}
            speed="Medium"
            showScore={true}
            autoPlay={false}
          />
        </div>

        {/* Galaxy Theme with AutoPlay */}
        <div>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            🌌 Thème Galaxy (Auto-Pilot)
          </h3>
          <Snake
            theme="Galaxy"
            gridSize={18}
            speed="Fast"
            showScore={true}
            autoPlay={true}
          />
        </div>

        {/* Retro Theme */}
        <div>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            🕹️ Thème Retro
          </h3>
          <Snake
            theme="Retro"
            gridSize={20}
            speed="Slow"
            showScore={true}
            autoPlay={false}
          />
        </div>

        {/* Minimal Theme */}
        <div>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            ⚪ Thème Minimal
          </h3>
          <Snake
            theme="Minimal"
            gridSize={16}
            speed="Lightning"
            showScore={false}
            autoPlay={false}
          />
        </div>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          padding: "20px",
          color: "white",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>🎮 Comment jouer</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
          }}
        >
          <div>
            <strong>Contrôles:</strong>
            <br />
            WASD ou Flèches directionnelles
          </div>
          <div>
            <strong>Actions:</strong>
            <br />
            Espace = Pause/Play
            <br />R = Redémarrer
          </div>
          <div>
            <strong>Objectif:</strong>
            <br />
            Mangez les pommes 🍎
            <br />
            Évitez les murs et votre queue
          </div>
        </div>
      </div>
    </div>
  );
}
