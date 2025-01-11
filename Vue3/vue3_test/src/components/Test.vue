<template>
    <z-swiper grabCursor effect="cards" :modules="modules">
        <z-swiper-item v-for="item in list" :key="item.id">
        </z-swiper-item>
    </z-swiper>
</template>

<script setup>
import {ZSwiper, ZSwiperItem} from '@zebra-ui/swiper'
import {EffectCards} from '@zebra-ui/swiper/modules'
import {ref} from "vue";
import p1 from '../../src/assets/logo.png'

const list = [p1]

const modules = ref([EffectCards])
</script>

<style scoped lang="sass">
@use "@zebra-ui/swiper/modules/effect-cards/effect-cards.scss"
</style>