const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, './public'),
  },
  module:{
    rules:[
      {
        exclude: /(node_modules|bower_components|vendors)/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        exclude: /(node_modules|bower_components|vendors)/,
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    },
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}