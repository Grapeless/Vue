import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server:{
    proxy:{
      //请求前缀
      '/api':{
        //如果实际的请求前缀与上面配置的相同则转发请求至此处url
        target:'https://movie.douban.com',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      },
      '/id':{
        //如果实际的请求前缀与上面配置的相同则转发请求至此处url
        target:'https://movie.douban.com',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/id/,'')
      },

    }
  }

})
