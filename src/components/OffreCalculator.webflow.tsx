import OffreCalculator from "./OffreCalculator";
import { declareComponent } from "@webflow/react";

export default declareComponent(OffreCalculator, {
  name: "Offre Calculator",
  description:
    "Un calculateur interactif pour configurer et estimer le prix d'un projet web. Permet aux utilisateurs de sélectionner le type de site, les services et les options de maintenance avec un calcul de prix en temps réel.",
  group: "Business",
  props: {},
});
