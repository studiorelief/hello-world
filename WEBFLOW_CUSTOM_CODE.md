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
  let lastVersion = null;

  async function checkForUpdates() {
    try {
      // Vérifier le fichier version.json avec cache-busting
      const response = await fetch('http://localhost:8080/version.json?t=' + Date.now());
      const data = await response.json();

      // Si c'est la première vérification
      if (!lastVersion) {
        lastVersion = data.timestamp;
        console.log('🔄 Hot reload activé - Version:', data.buildTime);
        return;
      }

      // Si la version a changé, recharger
      if (data.timestamp !== lastVersion) {
        console.log('🔄 Nouvelle version détectée, rechargement...', data.buildTime);
        lastVersion = data.timestamp;
        location.reload();
      }
    } catch (error) {
      console.warn('⚠️ Serveur local non accessible:', error.message);
    }
  }

  // Vérifier toutes les secondes pour un feedback plus rapide
  setInterval(checkForUpdates, 1000);
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
- Les changements sont détectés **toutes les secondes** via `version.json`
- Le hot-reload utilise un système de timestamp fiable (pas de cache HTTP)
- Ouvrez la console (F12) pour voir les logs de rechargement
