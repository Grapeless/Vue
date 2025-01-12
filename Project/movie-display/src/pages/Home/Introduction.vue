<template>
    <div class="flex flex-col text-zinc-500 font-['JetBrains_Mono'] gap-y-10 w-[60%] mt-20">
        <!--rate-->
        <ul class="flex w-full items-center text-sm divide-x divide-gray-500">
            <li class=" h-4 px-8 pl-0">USA</li>
            <li class=" h-4 px-8 fl">MAR 21,2025</li>
            <li class=" h-4 px-8 pr-0">IMDB:5.8/10</li>
        </ul>

        <!--title-->
        <h1 class="text-black text-7xl font-bold">Wonder Park</h1>

        <!--description-->
        <p class="w-3/4">Wonder Park tells the story of an amusement park where the imagination of a wildly creative
            girl named June comes alive.</p>

        <!--link button-->
        <a class="group size-16 rounded-full bg-yellow-300/90 hover:w-1/4  duration-300 cursor-pointer relative"
           href="">
            <span class="group-hover:opacity-100 opacity-0 absolute w-32 top-1/2 -translate-y-1/2 left-8 duration-300">▶</span>
            <span class=" text-black absolute w-32 top-1/2 -translate-y-1/2 left-12">WATCH NOW</span>
        </a>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>