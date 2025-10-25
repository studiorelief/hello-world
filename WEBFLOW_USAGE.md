# Guide d'utilisation Webflow

Ce projet permet de créer des fonctions TypeScript simple que vous pouvez injecter dans Webflow.

## Build

Pour générer les fichiers `dist/index.js` et `dist/index.css` :

```bash
npm run build:webflow
```

## Développement avec Preview Locale

Pour développer avec un serveur local et preview automatique :

```bash
npm run dev:webflow
```

Cela va :

1. Démarrer webpack en mode watch (recompilation automatique)
2. Lancer un serveur HTTP sur `http://localhost:8080`
3. Ouvrir automatiquement `http://localhost:8080/preview.html` dans votre navigateur

La page de preview permet de tester toutes les fonctionnalités des widgets en temps réel.

## Intégration dans Webflow

### 1. Upload des fichiers

1. Dans Webflow, allez dans **Project Settings** > **Custom Code**
2. Dans la section **Head Code**, ajoutez :

```html
<!-- CSS -->
<link rel="stylesheet" href="https://votre-domaine.com/index.css" />

<!-- JavaScript -->
<script src="https://votre-domaine.com/index.js"></script>
```

### 2. Utilisation des fonctions

Une fois les fichiers chargés, vous pouvez utiliser les fonctions dans Webflow :

#### Initialiser les widgets

```javascript
webflowWidgets.initWebflowWidget();
```

#### Créer un compteur

```html
<div id="my-counter"></div>
<script>
  webflowWidgets.createCounter("my-counter");
</script>
```

#### Valider un formulaire

```javascript
webflowWidgets.validateForm("form-id");
```

## Créer vos propres fonctions

Modifiez le fichier `src/webflow-entry.ts` pour ajouter vos propres fonctions :

```typescript
// Ajoutez votre fonction
export function maFonction() {
  // Votre code ici
}

// Exposez-la dans l'objet global
(window as any).webflowWidgets = {
  ...(window as any).webflowWidgets,
  maFonction,
};
```

Puis rebuilder : `npm run build:webflow`

## Styles CSS

Les styles sont définis dans `src/webflow-styles.css`. Modifiez-les selon vos besoins.

## Développement

1. Modifiez les fichiers TypeScript dans `src/`
2. Exécutez `npm run build:webflow`
3. Testez dans Webflow
4. Les fichiers `dist/` sont générés automatiquement

## Notes

- Les fichiers `dist/` sont automatiquement ignorés par git
- Le code est minifié pour la production
- Les fonctions sont exposées dans `window.webflowWidgets`
- Le fichier `dist/preview.html` est automatiquement généré pour tester localement
