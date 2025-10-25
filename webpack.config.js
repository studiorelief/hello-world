const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Plugin to generate preview.html after build
class GeneratePreviewPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("GeneratePreviewPlugin", () => {
      require("./scripts/generate-preview.js");
    });
  }
}

// Plugin to generate version.json for hot-reload detection
class GenerateVersionPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("GenerateVersionPlugin", () => {
      const distPath = path.join(__dirname, "dist");
      const versionPath = path.join(distPath, "version.json");

      const versionData = {
        timestamp: Date.now(),
        buildTime: new Date().toISOString()
      };

      fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2));
      console.log(`✅ version.json updated: ${versionData.buildTime}`);
    });
  }
}

module.exports = {
  entry: "./src/webflow-entry.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "webflowWidgets",
    libraryTarget: "umd",
    globalObject: "this",
    clean: true, // Nettoie le dossier dist avant chaque build
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.webflow.json",
            transpileOnly: false, // Force la vérification complète des types
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new GenerateVersionPlugin(),
    new GeneratePreviewPlugin(),
  ],
  // Configuration optimisée pour le watch mode
  watchOptions: {
    aggregateTimeout: 300, // Délai avant rebuild après changement
    poll: 1000, // Polling toutes les secondes (utile si les changements ne sont pas détectés)
    ignored: /node_modules/,
  },
  // Désactive le cache pour garantir les rebuilds
  cache: false,
  mode: "production",
};
