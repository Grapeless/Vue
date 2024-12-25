import Vuex from 'vuex'
import Vue from "vue"

//在实例化store之前使用Vuex
Vue.use(Vuex)

//actions处理逻辑
const actions = {
    //出发的动作(上下文,传递的参数)
    //context也包含dispatch,可将逻辑继续派遣给另一个函数
    //包含state对象，推荐只读，修改放在mutations中，使开发者工具能够正确追踪修改
    add(context,value) {
        // console.log(context)
        context.commit('ADD',value)
    },
    addWhenOdd(context,value){
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addAfter(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    }
}
//mutations更新数据(state)
const mutations = {
    ADD(state,value){
        console.log(state)
        state.sum += value
    },
    SUBTRACT(state,value){
        state.sum -= value
    },

}
const state = {
    sum: 0,
    student:'野鸡',
    school:'野鸡大学'
}
//类似于计算属性
const getters ={
    multiSum(state){
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
