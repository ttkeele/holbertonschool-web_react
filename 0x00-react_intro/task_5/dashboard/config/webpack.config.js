const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
	contentBase: path.resolve("./dist"),
        compress: true,
<<<<<<< HEAD
=======
        port: 8080,
>>>>>>> 3a51df7d7a050b90bd041c08d105fec8ac1cb199
    },
    output: {
      path: path.resolve('./dist'),
      filename: 'bundle.js',
    },
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 100000,
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [ "style-loader", "css-loader" ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: true,
              },
            },
          ],
        }
      ],
    },
<<<<<<< HEAD
  };
=======
};
>>>>>>> 3a51df7d7a050b90bd041c08d105fec8ac1cb199
