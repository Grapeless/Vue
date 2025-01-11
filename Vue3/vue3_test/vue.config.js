const {defineConfig} = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    pages: {
        index: {
            entry: path.join(__dirname, './src/main.js'),
        }
    },
    chainWebpack: (config) => {
        config.plugin('define').tap((definitions) => {
            Object.assign(definitions[0], {
                __VUE_OPTIONS_API__: 'true',
                __VUE_PROD_DEVTOOLS__: 'false',
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
            })
            return definitions
        })
    }
})
