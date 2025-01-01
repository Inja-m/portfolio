<template>
	<router-link :to="`/projects/${id}`">
		<div class="w-full sm:max-w-full sm:flex sm:space-x-8 p-6 sm:p-0 transform hover:-rotate-[0.8deg] transition duration-300 ease-in-out" :class="`bg-${bgColour}-200`">
			<div class="sm:h-64 h-48 flex-none justify-center p-6 hidden sm:block" :class="imgLeft ? 'order-2' : 'order-1'">
				<img class="sm:max-h-64 max-h-48 sm:max-w-64 object-center flex-none item-center" :src="getImageUrl()" alt="Projektbild" />
			</div>
			<div class="flex flex-col justify-center leading-normal sm:py-8" :class="imgLeft ? 'order-1' : 'order-2'">
				<h3 class="mb-2 mr-12">
					{{ title }}
				</h3>
				<p class="text-surface-800 text-base text-justify sm:mr-12">{{ content }}</p>
			</div>
		</div>
	</router-link>

</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  content: String,
  imageSrc: String,
  bgColour: String,
  imgLeft: Boolean
});

function getImageUrl() {
  return new URL(`../../assets/${props.imageSrc}`, import.meta.url)
}

</script>
