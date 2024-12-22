<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showSchoolName(name)">按钮</button>
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
    props:['showSchoolName']
}
</script>

<style scoped>

</style>