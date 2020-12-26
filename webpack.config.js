const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env = {}) => {
  const { mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "rsdTest",
        template: "public/index.html",
      }),
    ];

    if (isProd)
      plugins.push(new MiniCssExtractPlugin({ filename: "main-[hash:8].css" }));

    return plugins;
  };

  return {
    mode: isProd ? "production" : isDev && "development",
    entry: "./src/index.tsx",
    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },

    module: {
      rules: [
        {
          test: /\.(js|tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
      port: 8000,
      historyApiFallback: true,
      contentBase: "./",
      hot: true,
      openPage: "catalog",
    },
  };
};
