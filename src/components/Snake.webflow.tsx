import { Snake } from "./Snake";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Snake, {
  name: "Snake Game",
  description:
    "Un jeu Snake interactif et créatif avec différents thèmes visuels, modes de vitesse et effets spéciaux. Parfait pour ajouter un élément ludique à votre site.",
  group: "Interactive",
  props: {
    theme: props.Variant({
      name: "Theme",
      options: ["Neon", "Retro", "Minimal", "Galaxy"],
      defaultValue: "Neon",
    }),
    gridSize: props.Number({
      name: "Grid Size",
      defaultValue: 20,
      min: 10,
      max: 30,
    }),
    speed: props.Variant({
      name: "Game Speed",
      options: ["Slow", "Medium", "Fast", "Lightning"],
      defaultValue: "Medium",
    }),
    showScore: props.Boolean({
      name: "Show Score",
      defaultValue: true,
    }),
    autoPlay: props.Boolean({
      name: "Auto Play",
      defaultValue: false,
    }),
  },
});
