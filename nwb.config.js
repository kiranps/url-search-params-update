module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: {
      global: 'URLSearchParamsUpdate',
      externals: {}
    }
  }
}
