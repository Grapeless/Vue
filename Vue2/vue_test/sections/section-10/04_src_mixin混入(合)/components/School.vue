<template>
    <div>
        <h2 @click="showMsg">{{ name }}</h2>
        <h2>{{address}}</h2>
    </div>
</template>

<script>
// import {args, fun} from "@/mixin";

export default {
    name: "School",
    data(){
      return{
          name:'野鸡大学',
          address:'湖北省'
      }
    },
    // mixins:[fun,args]

}
</script>

<style scoped>

</style>