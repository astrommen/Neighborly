const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY)
      }
    })
  ]
}