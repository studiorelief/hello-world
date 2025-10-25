# Code à insérer dans Webflow Custom Code

## 🎯 Pour le développement local

Utilisez ce code dans **Project Settings > Custom Code > Head Code** de votre projet Webflow pour charger les widgets depuis votre serveur local.

### Head Code (Development)

```html
<!-- Webflow Widgets - DEV MODE (localhost) -->
<link rel="stylesheet" href="http://localhost:8080/index.css" id="webflow-widgets-css">
<script src="http://localhost:8080/index.js" id="webflow-widgets-js"></script>

<!-- Auto-reload sur changements -->
<script>
(function() {
  let lastJsModified = null;
  let lastCssModified = null;

  async function checkForUpdates() {
    try {
      // Vérifier index.js
      const jsResponse = await fetch('http://localhost:8080/index.js', { method: 'HEAD' });
      const jsLastModified = jsResponse.headers.get('last-modified');

      // Vérifier index.css
      const cssResponse = await fetch('http://localhost:8080/index.css', { method: 'HEAD' });
      const cssLastModified = cssResponse.headers.get('last-modified');

      // Si c'est la première vérification
      if (!lastJsModified) {
        lastJsModified = jsLastModified;
        lastCssModified = cssLastModified;
        console.log('🔄 Hot reload activé (vérification toutes les 2s)');
        return;
      }

      // Si un fichier a changé, recharger
      if (jsLastModified !== lastJsModified || cssLastModified !== lastCssModified) {
        console.log('🔄 Fichiers modifiés détectés, rechargement...');
        location.reload();
      }
    } catch (error) {
      console.warn('⚠️ Serveur local non accessible:', error.message);
    }
  }

  // Vérifier toutes les 2 secondes
  setInterval(checkForUpdates, 2000);
})();
</script>
```

---

## 🚀 Pour la production (CDN)

Une fois que vous avez uploadé vos fichiers sur un CDN, utilisez ce code :

### Head Code (Production)

```html
<!-- Webflow Widgets - PRODUCTION -->
<link rel="stylesheet" href="https://votre-cdn.com/index.css">
<script src="https://votre-cdn.com/index.js"></script>
```

---

## 📝 Utilisation des fonctions

Une fois le code chargé, vous pouvez utiliser les fonctions dans vos éléments Webflow :

### Exemple : Compteur animé

```html
<div id="mon-compteur"></div>
<script>
  webflowWidgets.createCounter('mon-compteur', 100, 2000);
</script>
```

### Exemple : Animation au scroll

```html
<div class="animate">Ce texte apparaîtra au scroll</div>
```

### Exemple : Bouton copier

```html
<button onclick="webflowWidgets.copyToClipboard('Texte copié!')">
  Copier
</button>
```

### Exemple : Toggle dark mode

```html
<button onclick="webflowWidgets.toggleDarkMode()">
  Toggle Dark Mode
</button>
```

---

## 🛠️ Workflow de développement

1. **Démarrer le serveur local** :
   ```bash
   npm run dev:webflow
   ```

2. **Ouvrir votre site Webflow** :
   - Allez sur https://webflow-cloud---doc---test.webflow.io/
   - Le site charge automatiquement les fichiers depuis localhost:8080

3. **Modifier vos fonctions** :
   - Éditez `src/functions/Tricks.ts`
   - Webpack recompile automatiquement
   - Votre site Webflow se rafraîchit automatiquement

4. **Publier en production** :
   - Buildez : `npm run build:webflow`
   - Uploadez `dist/index.js` et `dist/index.css` sur votre CDN
   - Changez le Custom Code pour pointer vers votre CDN

---

## 🎨 Fonctions disponibles

- `webflowWidgets.round()` - Animation rotation GSAP
- `webflowWidgets.createCounter(id, target, duration)` - Compteur animé
- `webflowWidgets.validateForm(formId)` - Validation de formulaire
- `webflowWidgets.initParallax(selector, speed)` - Effet parallaxe
- `webflowWidgets.toggleDarkMode()` - Toggle mode sombre
- `webflowWidgets.initDarkMode()` - Initialiser mode sombre
- `webflowWidgets.animateOnScroll(selector)` - Animation au scroll
- `webflowWidgets.copyToClipboard(text)` - Copier dans le presse-papier
- `webflowWidgets.smoothScrollTo(elementId)` - Scroll fluide
- `webflowWidgets.init()` - Initialisation manuelle

---

## ⚠️ Important

- Le mode développement nécessite que votre serveur local soit accessible
- En production, assurez-vous que votre CDN supporte HTTPS
- Les changements sont détectés toutes les 2 secondes en mode dev
