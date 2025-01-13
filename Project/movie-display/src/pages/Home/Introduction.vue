<template>
    <div class="flex flex-col text-zinc-500 font-['JetBrains_Mono'] gap-y-10 w-[60%] mt-20 ">
        <!--rate-->
        <ul class="flex h-4 w-full items-center gap-2 text-xs divide-gray-500 md:gap-5 md:text-sm">
            <li>USA</li>
            <li>|</li>
            <li>MAR 21,2025</li>
            <li>|</li>
            <li>IMDB:5.8/10</li>
        </ul>

        <!--title-->
        <h1 class="w-full text-4xl font-bold text-black md:text-7xl max-[1090px]:w-3/4">Wonder Park</h1>

        <!--description-->
        <p class="w-full md:w-3/4">Wonder Park tells the story of an amusement park where the imagination of a wildly creative
            girl named June comes alive.</p>

        <!--link button-->
        <a class="relative cursor-pointer rounded-full bg-yellow-300/90 duration-300 group size-16 hover:w-40"
           href="">
            <span class="absolute top-1/2 left-8 w-32 -translate-y-1/2 opacity-0 duration-300 group-hover:opacity-100">▶</span>
            <span class="absolute top-1/2 left-12 w-32 -translate-y-1/2 text-black">WATCH NOW</span>
        </a>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>