<template>
	<div class="w-full sm:max-w-full sm:flex bg-surface-200 my-12">
      <div class="h-48 sm:h-48 sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden">
        <img class="h-48 sm:h-48 sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden" :src = "imageSrc" alt="Logo" height = "48" width = "48"/>
      </div>
      <div class="rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-center leading-normal">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">{{ content }}</p>
      </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  content: String,
  imageSrc: String,
  bgColor: String
})

</script>