var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var output={
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
};

var cssOptionLoader;

if (process.env.NODE_ENV !== 'production') {
  cssOptionLoader = { sourceMap: false }
  output.publicPath='dist/'
} else {
  cssOptionLoader = { sourceMap: true, extract: true }
}

var webpackOptions = {
  output: output,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders(cssOptionLoader),
          postcss: [
            require('autoprefixer')({
              browsers: ['last 2 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=50000'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?limit=50000'
      },
      { 
        test: /\.json$/, 
        loader: 'json-loader' 
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery"
  })
  ],
  devtool: 'source-map',
}


if (process.env.NODE_ENV === 'production') {
  webpackOptions.externals={
    'vue' : 'Vue'
  }
  webpackOptions.entry= './src/entry.js';

  webpackOptions.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  webpackOptions.plugins = (webpackOptions.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])

   webpackOptions.module.rules = webpackOptions.module.rules.concat(utils.styleLoaders({ sourceMap: true, extract: true }))
} else {

  webpackOptions.module.rules = webpackOptions.module.rules.concat(utils.styleLoaders({ sourceMap: true }))
  webpackOptions.plugins = (webpackOptions.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
  ]);

  webpackOptions.resolve.alias= {
    'vue$': 'vue/dist/vue'
  }
  webpackOptions.entry= './src/main.js';
}
module.exports = webpackOptions