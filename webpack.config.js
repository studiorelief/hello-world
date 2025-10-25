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
  mode: "production",
};
