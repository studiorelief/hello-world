# Quick Start - Webflow Widgets

## 🚀 Démarrage rapide

### Développement avec preview locale

```bash
npm run dev:webflow
```

Cette commande va :

1. Démarrer webpack en mode watch
2. Lancer un serveur HTTP sur `http://localhost:8080`
3. Ouvrir automatiquement `http://localhost:8080/preview.html`

### Build de production

```bash
npm run build:webflow
```

Génère les fichiers dans `dist/` :

- `index.js` - JavaScript minifié
- `index.css` - Styles CSS
- `preview.html` - Page de test locale

### Autres commandes disponibles

- `npm run build:webflow:watch` - Build en mode watch (sans serveur)

## 📝 Workflow de développement

1. **Modifier le code** dans `src/webflow-entry.ts`
2. **Tester localement** avec `npm run dev:webflow`
3. **Build pour production** avec `npm run build:webflow`
4. **Uploader** les fichiers `dist/index.js` et `dist/index.css` dans Webflow

## 🎯 Fonctions disponibles

Toutes les fonctions sont accessibles via `window.webflowWidgets` :

```javascript
webflowWidgets.initWebflowWidget(); // Initialisation
webflowWidgets.createCounter("id"); // Créer un compteur
webflowWidgets.validateForm("id"); // Valider un formulaire
```

## 📖 Documentation complète

Voir [WEBFLOW_USAGE.md](./WEBFLOW_USAGE.md) pour plus de détails.
