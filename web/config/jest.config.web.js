const path = require('path')
module.exports = {
  resolver: 'jest-directory-named-resolver',
  rootDir: process.cwd(),
  globals: {
    __REDWOOD__API_PROXY_PATH: '/',
  },
  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.web.js')],
  moduleNameMapper: {
    '^react$': 'preact/compat',
    '^react-dom/test-utils$': 'preact/test-utils',
    '^react-dom$': 'preact/compat',
  },
}
