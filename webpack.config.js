const webpack = require('webpack')
const path = require('path')

module.exports = (function(options) {

  return {
    entry: {
      main: path.join(__dirname, "src/index.ts")
    },

    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
    },

    devtool: 'inline-source-map',

    module: {
      rules: [
        { test: /\.ts$/, loader: "awesome-typescript-loader" },

        {
          test: /^(.(?!\.test))*\.ts$/,
          loader: "istanbul-instrumenter-loader",
          query: {
            embedSource: true,
          },
          enforce: "post"
        }
      ],
    },

    plugins: [
      // new webpack.optimize.UglifyJsPlugin()
      new webpack.SourceMapDevToolPlugin({ test: /\.ts$/i })
    ],

    resolve: {
      extensions: ['.ts', '.js', '.json'],
      alias: {
         // sinon: 'sinon/pkg/sinon'
      }
    }


  }
})()
