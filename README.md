This is a [Next.js](https://nextjs.org) project bootstrapped with [`webflow cloud init`](https://developers.webflow.com/webflow-cloud/intro).

## 🚀 Webflow Widgets

Ce projet permet de créer des fonctions TypeScript et de les injecter dans Webflow via CDN.

### ⚡ Workflow de développement

1. **Démarrer le serveur local avec hot-reload** :
   ```bash
   npm run dev:webflow
   ```
   - Lance webpack en mode watch
   - Démarre un serveur HTTP avec CORS sur `http://localhost:8080`
   - Ouvre une page de preview locale

2. **Configurer votre site Webflow** :
   - Allez dans votre projet Webflow > **Project Settings > Custom Code**
   - Copiez le code depuis [WEBFLOW_CUSTOM_CODE.md](./WEBFLOW_CUSTOM_CODE.md)
   - Votre site Webflow chargera automatiquement les fichiers depuis localhost

3. **Développer vos fonctions** :
   - Éditez `src/functions/Tricks.ts`
   - Webpack recompile automatiquement
   - Votre site Webflow se rafraîchit automatiquement (toutes les 2s)

4. **Build pour production** :
   ```bash
   npm run build:webflow
   ```
   - Génère `dist/index.js` et `dist/index.css` minifiés
   - Uploadez sur votre CDN
   - Mettez à jour le Custom Code Webflow avec l'URL CDN

### 📚 Documentation

- [WEBFLOW_CUSTOM_CODE.md](./WEBFLOW_CUSTOM_CODE.md) - Code à insérer dans Webflow
- [WEBFLOW_USAGE.md](./WEBFLOW_USAGE.md) - Documentation complète
- [QUICK_START.md](./QUICK_START.md) - Guide de démarrage rapide

### 🎨 Structure du projet

```
src/
├── functions/
│   ├── Tricks.ts          # Collection de fonctions utiles
│   └── round.ts           # Animation GSAP
├── webflow-entry.ts       # Point d'entrée (expose window.webflowWidgets)
└── webflow-styles.css     # Styles pour les widgets

dist/                      # Fichiers générés (non versionnés)
├── index.js               # Bundle JavaScript
├── index.css              # Bundle CSS
└── preview.html           # Page de test locale
```

## Next.js Development

Pour développer l'application Next.js :

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
