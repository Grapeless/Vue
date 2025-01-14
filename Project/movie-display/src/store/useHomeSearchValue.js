import {defineStore} from "pinia";
import {ref} from "vue";

export const useHomeSearchValue = defineStore('homeSearchValue',()=>{
    const homeSearchValue = ref()


    return {homeSearchValue}
})