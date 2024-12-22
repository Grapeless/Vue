<template>
    <div>
        <h2 >{{ name }}</h2>
        <h2>{{address | mySlice}}</h2>
    </div>
</template>

<script>

export default {
    name: "School",
    data(){
      return{
          name:'野鸡大学',
          address:'湖北省'
      }
    },

}
</script>

<style scoped>

</style>