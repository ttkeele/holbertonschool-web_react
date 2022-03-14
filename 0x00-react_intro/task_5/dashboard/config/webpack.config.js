const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    output: {
	filename: "bundle.js",
	path: path.resolve("./dist"),
    },
    performance: {
	maxAssetSize: 100000,
	maxEntrypointSize: 100000,
	hints: false,
    },
    devServer: {
	hot: true,
	compress: true,
    },
    module: {
      rules: [
	{
	  test: /\.js|\.jsx$/,
	  exclude: /node_modules/,
	  loader: "babel-loader",
	},
	{
	  test: /\.css$/i,
	  use: ["style-loader", "css-loader"],
	},
	{
	  test: /\.(gif|png|jpe?g|svg)$/i,
	  use: [
	    "file-loader",
            {
	      loader: "image-webpack-loader",
	      options: {
		bypassOnDebug: true, // webpack@1.x
		disable: true, // webpack@2.x and newer
	      },
	    },
          ],
        },
      ],
    },
  };
