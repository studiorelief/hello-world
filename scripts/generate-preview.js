const fs = require('fs');
const path = require('path');

const previewHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webflow Widgets - Preview</title>
    <link rel="stylesheet" href="index.css">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .section {
            background: white;
            padding: 30px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 3px solid #0073e6;
            padding-bottom: 10px;
        }
        h2 {
            color: #555;
            margin-top: 0;
        }
        .code-block {
            background: #f8f8f8;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #0073e6;
            margin: 10px 0;
            font-family: monospace;
            font-size: 14px;
        }
        #counter-container {
            min-height: 60px;
            padding: 20px;
            border: 2px dashed #ddd;
            border-radius: 4px;
            margin: 10px 0;
        }
        #form-preview {
            max-width: 400px;
        }
        #form-preview input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        #form-preview button {
            background-color: #0073e6;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
        }
        #form-preview button:hover {
            background-color: #005bb5;
        }
        .success {
            color: #28a745;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>🚀 Webflow Widgets - Preview Locale</h1>
    
    <div class="section">
        <h2>✅ Widgets chargés !</h2>
        <p>Les fichiers <code>index.js</code> et <code>index.css</code> sont chargés et prêts à être utilisés.</p>
        <div class="code-block">
            webflowWidgets.initWebflowWidget();
        </div>
        <p id="init-status" class="success">✓ Initialisation réussie</p>
    </div>

    <div class="section">
        <h2>🔢 Test du Compteur</h2>
        <p>Créez un compteur en cliquant sur ce bouton :</p>
        <button onclick="testCounter()">Créer un compteur</button>
        <div id="counter-container">
            <!-- Le compteur apparaîtra ici -->
        </div>
        <div class="code-block">
webflowWidgets.createCounter('counter-container');
        </div>
    </div>

    <div class="section">
        <h2>📝 Test de Validation de Formulaire</h2>
        <p>Essayez de soumettre le formulaire sans remplir les champs requis :</p>
        <form id="form-preview">
            <input type="text" placeholder="Nom (requis)" required>
            <input type="email" placeholder="Email (requis)" required>
            <input type="text" placeholder="Message (optionnel)">
            <button type="submit">Envoyer</button>
        </form>
        <div class="code-block">
webflowWidgets.validateForm('form-preview');
        </div>
    </div>

    <div class="section">
        <h2>📋 Console</h2>
        <p>Ouvrez la console du navigateur (F12) pour voir les logs.</p>
    </div>

    <script src="index.js"></script>
    <script>
        // Initialiser les widgets
        webflowWidgets.initWebflowWidget();

        // Test du compteur
        function testCounter() {
            const container = document.getElementById('counter-container');
            container.innerHTML = '';
            webflowWidgets.createCounter('counter-container');
        }

        // Activer la validation du formulaire
        webflowWidgets.validateForm('form-preview');

        console.log('=== Webflow Widgets Preview ===');
        console.log('Disponible dans window.webflowWidgets:', window.webflowWidgets);
        console.log('Fonctions disponibles:', Object.keys(window.webflowWidgets));
    </script>
</body>
</html>
`;

const distPath = path.join(__dirname, '..', 'dist');
const previewPath = path.join(distPath, 'preview.html');

// Ensure dist directory exists
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Write preview.html
fs.writeFileSync(previewPath, previewHtml);
console.log('✅ preview.html généré avec succès dans dist/');
