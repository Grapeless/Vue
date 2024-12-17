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
    module: {
        rules: [
            {
                //匹配css文件
                test: /\.css$/i,
                //loader处理顺序  --->
                use: ['style-loader', 'css-loader'],
            },
            { // 针对资源模块（图片，字体文件，图标文件等）处理
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset', // 根据文件大小（8KB）小于：把文件转成 base64 打包进 js 文件中（减少网络请求次数）大于：文件复制到输出的目录下
                generator: { // 输出文件时，路径+名字
                    filename: 'assets/[hash][ext]'
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        //指定要自动复制的html文件对象，会在打包后自动在dist下生成一个新的html
        template: path.join(__dirname, './public/index.html')
    })],
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    }

}