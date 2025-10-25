/**
 * Tricks.ts - Collection de fonctions utiles pour Webflow
 *
 * Ce fichier centralise toutes les petites fonctions TypeScript
 * à injecter dans Webflow via CDN
 */

import { round } from './round';

// Re-exporte la fonction round existante
export { round };

/**
 * Initialise un compteur animé
 * @param elementId - ID de l'élément HTML où afficher le compteur
 * @param target - Valeur cible du compteur
 * @param duration - Durée de l'animation en millisecondes
 */
export function createCounter(elementId: string, target: number = 100, duration: number = 2000): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }

  const start = 0;
  const increment = target / (duration / 16); // 60 FPS
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toString();
  }, 16);
}

/**
 * Valide un formulaire simple
 * @param formId - ID du formulaire à valider
 * @returns true si le formulaire est valide
 */
export function validateForm(formId: string): boolean {
  const form = document.getElementById(formId) as HTMLFormElement;
  if (!form) {
    console.error(`Form with id "${formId}" not found`);
    return false;
  }

  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach((input: Element) => {
    const htmlInput = input as HTMLInputElement | HTMLTextAreaElement;
    if (!htmlInput.value.trim()) {
      htmlInput.classList.add('error');
      isValid = false;
    } else {
      htmlInput.classList.remove('error');
    }
  });

  return isValid;
}

/**
 * Ajoute un effet de parallaxe à un élément
 * @param selector - Sélecteur CSS de l'élément
 * @param speed - Vitesse du parallaxe (0.1 = lent, 1 = rapide)
 */
export function initParallax(selector: string, speed: number = 0.5): void {
  const elements = document.querySelectorAll(selector);

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    elements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/**
 * Toggle dark mode
 */
export function toggleDarkMode(): void {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

/**
 * Initialise le dark mode depuis le localStorage
 */
export function initDarkMode(): void {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
}

/**
 * Anime l'apparition des éléments au scroll
 * @param selector - Sélecteur CSS des éléments à animer
 */
export function animateOnScroll(selector: string): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(selector).forEach(element => {
    observer.observe(element);
  });
}

/**
 * Copie du texte dans le presse-papier
 * @param text - Texte à copier
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Vérification que l'API Clipboard est disponible
    const nav = navigator as any;
    if (nav.clipboard && typeof nav.clipboard.writeText === 'function') {
      await nav.clipboard.writeText(text);
      return true;
    }
    // Fallback pour les anciens navigateurs
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}

/**
 * Smooth scroll vers un élément
 * @param elementId - ID de l'élément cible
 */
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
