<template>
<div class="category">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "Category"
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
video{
    width: 100%;
}
img{
    width: 100%;
}
</style>