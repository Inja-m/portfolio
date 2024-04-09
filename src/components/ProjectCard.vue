<template>
	<div class="w-full sm:max-w-full sm:flex my-12  space-x-12" :class="`bg-${bgColour}-200`">
      <div class="sm:h-64 h-48 flex-none justify-center p-4" :class="imgLeft ? 'order-2' : 'order-1'">
        <img class="sm:h-64 h-48 flex-none item-center" :src = "imageSrc" alt="Projektbild" />
      </div>
      <div class="flex flex-col justify-center leading-normal"  :class="imgLeft ? 'order-1' : 'order-2'">
        <div class="text-gray-900 font-bold text-xl mb-2 mr-12">{{ title }}</div>
        <p class="text-gray-700 text-base text-justify mr-12">{{ content }}</p>
      </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  content: String,
  imageSrc: String,
  bgColour: String,
  imgLeft: Boolean
})

</script>