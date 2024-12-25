import Vuex from 'vuex'
import Vue from "vue"

import CountAbout from './count.js'
import PersonAbout from './person.js'
//在实例化store之前使用Vuex
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        CountAbout,
        PersonAbout
    }
})
