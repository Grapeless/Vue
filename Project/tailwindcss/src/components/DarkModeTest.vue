<template>
    <div class="dark dark:bg-gradient-to-tr dark:from-slate-800 dark:form-70% dark:via-cyan-950 dark:via-90% dark:to-slate-900 dark:to-100% relative mx-auto mt-5 flex h-64 w-8/12 flex-col items-center justify-evenly rounded bg-gradient-to-tr from-slate-100 via-pink-100 to-sky-100 text-center font-mono from-50% via-70% to-90%"
         ref="rootDiv">

        <svg class="cursor-pointer absolute inset-3 bg-sky-400 stroke-white p-1 size-6 select-none"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="currentColor"
             @click="toggleDarkMode"
             v-if="!darkModeFlag">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
        </svg>

        <svg class="cursor-pointer absolute inset-3 bg-black fill-black stroke-white p-1 size-6 select-none"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             fill="currentColor"
             @click="toggleDarkMode"
             v-if="darkModeFlag">
            <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z"/>
        </svg>

        <h1 class="indent-0 text-5xl font-bold text-pretty dark:text-white">
            Rapidly build modern websites without ever leaving yourHTML.
        </h1>

        <p class="mx-24 dark:text-slate-200 ">
            A utility-first CSS framework packed with classes like
            <span class="text-sky-500">flex</span>,
            <span class="text-sky-500">pt-4</span>,
            <span class="text-sky-500">text-center</span> and
            <span class="text-sky-500">rotate-90</span> that can be composed to
            build any design, directly in your markup.
        </p>

        <button class="dark:bg-sky-500 h-10 w-fit rounded bg-black px-5 text-white ring-slate-300 ring-offset-1 transition hover:ring-2">
            Get started
        </button>

    </div>
</template>

<script setup>
import { ref} from "vue";

const darkModeFlag = ref(true)
const rootDiv = ref()
function toggleDarkMode() {
    rootDiv.value.classList.toggle('dark')
    darkModeFlag.value = !darkModeFlag.value
}
</script>

<style scoped>

</style>