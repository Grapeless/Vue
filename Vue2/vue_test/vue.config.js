const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭语法检查
    lintOnSave:false,
    pages:{
        index:{
            entry:path.join(__dirname,'./sections/section-20/18_src_TodoList_动画/main.js'),

        }
    }
})
