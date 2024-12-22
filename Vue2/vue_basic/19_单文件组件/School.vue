<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="tip($event,5)">按钮</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: '野鸡大学',
      address: '湖北省',
    }
  },
  methods: {
    tip(e, n) {
      console.log(e, n)
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>