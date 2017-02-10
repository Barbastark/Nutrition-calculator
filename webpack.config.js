var webpack = require('webpack');

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "./js/dist/bundle.js"
  },

  module: {
   
   loaders: [
  
    // Babel / React Loader
    {
      test: [/\.js$/, /\.es6$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'] 
      }
    },

    // Style Loader
    {
      test: /\.css$/, loader: "style!css",
    }

   ]
   
 },

 resolve: {
   extensions: ['', '.js', '.es6']
 },
  
  watch: true

}