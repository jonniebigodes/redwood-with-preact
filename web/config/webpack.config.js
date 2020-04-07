const webpack = require('webpack')
module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      h: ['preact', 'h'],
    }),
  ]
  /* const { plugins } = config
  console.log(`plugins:${JSON.stringify(plugins, null, 2)}`) */
  config.resolve.alias = {
    ...config.resolve.alias,
    react: 'preact/compat',
    'react-dom/test-utils': 'preact/test-utils',
    'react-dom': 'preact/compat',
  }
  /* console.log(`redwod webpack config:\n${JSON.stringify(config, null, 2)}`) */
  return config
}
