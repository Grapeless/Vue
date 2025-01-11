<template>
    <nav>
        <RouterLink :to="{name:'page1'}" active-class="active">Go to page1</RouterLink>
        <RouterLink to="/page2" active-class="active">Go to page2</RouterLink>
    </nav>
    <div class="display">
        <RouterView></RouterView>
    </div>
</template>
<script setup>
    import {RouterView,RouterLink} from 'vue-router'
</script>
<style scoped>
.active{
    color: red;
}

</style>