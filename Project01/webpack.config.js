const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //配置入口
    entry: './src/index.js',
    //配置出口
    output: {
        //文件名
        filename: 'test.js',
        //路径
        path: path.join(__dirname, './dist')
    },
    plugins: [new HtmlWebpackPlugin({
        //指定要自动复制的html文件对象，会在打包后自动在dist下生成一个新的html
        template: path.join(__dirname, './public/index.html')
    })],
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@':path.join(__dirname,'src')
        }
    }

}