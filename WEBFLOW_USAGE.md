# Guide d'utilisation Webflow

Ce projet permet de créer des fonctions TypeScript et de les injecter dans Webflow.

## 🎯 Modes de développement

### Mode 1 : Preview locale (test rapide)

Pour tester vos widgets dans une page HTML locale :

```bash
npm run dev:webflow
```

Cela va :
- Démarrer webpack en mode watch (recompilation automatique)
- Lancer un serveur HTTP avec CORS sur `http://localhost:8080`
- Ouvrir `http://localhost:8080/preview.html` dans votre navigateur
- Auto-refresh de la page quand les fichiers changent

### Mode 2 : Site Webflow (développement réel)

**Le vrai workflow de développement - votre site Webflow charge les fichiers depuis localhost**

**Étape 1 - Démarrer le serveur local** :
```bash
npm run dev:webflow
```

**Étape 2 - Configurer votre site Webflow** :
1. Allez dans **Project Settings > Custom Code > Head Code**
2. Copiez le code de développement depuis [WEBFLOW_CUSTOM_CODE.md](./WEBFLOW_CUSTOM_CODE.md)
3. Sauvegardez

**Étape 3 - Développer** :
- Ouvrez votre site Webflow (ex: https://webflow-cloud---doc---test.webflow.io/)
- Éditez `src/functions/Tricks.ts`
- Webpack recompile automatiquement
- Votre site Webflow se rafraîchit automatiquement toutes les 2 secondes

**Avantages** :
- Vous testez directement sur votre vrai site Webflow
- Hot-reload automatique
- Pas besoin de republier ou uploader

## Build pour production

Pour générer les fichiers finaux :

```bash
npm run build:webflow
```

Génère `dist/index.js` et `dist/index.css` minifiés, prêts pour votre CDN.

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

**Ajoutez vos fonctions dans `src/functions/Tricks.ts`** :

```typescript
/**
 * Ma nouvelle fonction
 */
export function maFonction(param: string): void {
  console.log('Ma fonction:', param);
  // Votre code ici
}
```

**Puis exposez-la dans `src/webflow-entry.ts`** :

```typescript
import * as Tricks from './functions/Tricks';

window.webflowWidgets = {
  // ... fonctions existantes
  maFonction: Tricks.maFonction, // Ajoutez ici
};
```

**En mode dev** : webpack recompile automatiquement
**En mode prod** : `npm run build:webflow`

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
