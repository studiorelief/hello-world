const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Simple plugin to generate preview.html after build
class GeneratePreviewPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("GeneratePreviewPlugin", () => {
      require("./scripts/generate-preview.js");
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
