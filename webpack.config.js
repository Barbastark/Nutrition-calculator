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
    //Image loaders
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'improved-image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
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