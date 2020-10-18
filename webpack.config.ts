import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "pg-native": "./src/dummy.ts",
    },
  },
  target: "node",
};

export default config;
