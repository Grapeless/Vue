const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭语法检查
    lintOnSave:false,
    pages:{
        index:{
            entry:path.join(__dirname,'./sections/section-40/42_src_组件内路由守卫/main.js'),
        }
    },
    devServer: {
        // proxy: 'http://localhost:5000'
        proxy: {
            '/api/students': {
                //原始请求路径
                target: 'http://localhost:5000',
                //websocket
                ws: true,
                //换源策略
                changeOrigin: true,
                //请求路径重写，键：匹配路径的正则表达式，值：替换值
                pathRewrite:{'^/api/students':'students'}
            },
            //可匹配多个
            '/api/cars': {
                target: 'http://localhost:5001',
                //默认为真
                /*ws:true,
                changeOrigin:true,*/
                pathRewrite:{'^/api/cars':'cars'}
            }
        }
    }
})
