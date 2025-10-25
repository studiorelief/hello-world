/**
 * webflow-entry.ts - Point d'entrée pour les widgets Webflow
 *
 * Ce fichier expose toutes les fonctions dans window.webflowWidgets
 * pour les rendre disponibles dans Webflow via CDN
 */

// Import des styles
import './webflow-styles.css';

// Import de toutes les fonctions depuis Tricks.ts
import * as Tricks from './functions/Tricks';

// Définition du type pour l'objet global
interface WebflowWidgets {
  // Fonctions d'animation
  round: typeof Tricks.round;
  initParallax: typeof Tricks.initParallax;
  animateOnScroll: typeof Tricks.animateOnScroll;

  // Fonctions d'interaction
  createCounter: typeof Tricks.createCounter;
  validateForm: typeof Tricks.validateForm;
  smoothScrollTo: typeof Tricks.smoothScrollTo;
  copyToClipboard: typeof Tricks.copyToClipboard;

  // Dark mode
  toggleDarkMode: typeof Tricks.toggleDarkMode;
  initDarkMode: typeof Tricks.initDarkMode;

  // Fonction d'initialisation
  init: () => void;
}

// Exposition dans l'objet global window
declare global {
  interface Window {
    webflowWidgets: WebflowWidgets;
  }
}

// Fonction d'initialisation globale
const init = (): void => {
  console.log('🎨 Webflow Widgets initialized!');

  // Auto-init dark mode
  Tricks.initDarkMode();

  // Auto-init animations on scroll pour les éléments avec classe .animate
  const animateElements = document.querySelectorAll('.animate');
  if (animateElements.length > 0) {
    Tricks.animateOnScroll('.animate');
  }
};

// Exposition de toutes les fonctions
window.webflowWidgets = {
  // Fonctions d'animation
  round: Tricks.round,
  initParallax: Tricks.initParallax,
  animateOnScroll: Tricks.animateOnScroll,

  // Fonctions d'interaction
  createCounter: Tricks.createCounter,
  validateForm: Tricks.validateForm,
  smoothScrollTo: Tricks.smoothScrollTo,
  copyToClipboard: Tricks.copyToClipboard,

  // Dark mode
  toggleDarkMode: Tricks.toggleDarkMode,
  initDarkMode: Tricks.initDarkMode,

  // Initialisation
  init,
};

// Auto-initialisation au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export pour webpack
export default window.webflowWidgets;
