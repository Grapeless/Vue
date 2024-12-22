<template >
    <div class="test">
        <h2 class="fs">{{ name }}</h2>
        <h2>{{address}}</h2>
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

<style scoped lang="less">
.test{
    background-color:gray ;
  .fs{
    color: greenyellow;
  }
}
</style>