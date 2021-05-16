const path = require("path");
module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "/public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
