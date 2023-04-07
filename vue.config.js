var fs = require("fs");
var path = require("path");
var homedir = require('os').homedir()

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // publicPath: process.env.NODE_ENV === 'production'
  //     ? '/visualizer/'
  //     : '/visualizer/',
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     title: 'Sterling Edmonton - Visualizer app'
  //   }
  // },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    port: 3000,
    https: true,
    // proxy:  'https://www.sterlingedmonton.com/',
    
    proxy: {
      '/wp-json': {
        target: 'https://sterlingedmonton.com/',
        secure: false,
        changeOrigin: true
      }
    }
    
  }
})
