// vue.config.js
module.exports = {
  devServer: {
  // https : true,
    proxy: {
      // '/pics': {
      //   target: {
      //     protocol: 'http:',
      //     host: 'localhost',
      //     port: 3000
      //   },
      //   changeOrigin: true,
      //   logLevel: 'debug'
      // }
    }
  },
  // css: {
  //   loaderOptions: {
  //     // pass options to sass-loader
  //     sass: {
  //       data: `@import "@/scss/main.scss";`
  //     }
  //   }
  // },
  pwa: {
    name: 'Nidel',
    themeColor: '#282828',
    msTileColor: '#282828',
    appleMobileWebAppStatusBarStyle: 'black-translucent'
  }
}
