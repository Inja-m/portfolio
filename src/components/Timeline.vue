<template>
	<ol class="relative border-s-2 border-gray-200 ml-5">
		<div v-for="item in item">
			<li class="mb-8 ms-10">
				<span
					class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full ring-white -start-5">
					<span class="material-symbols-outlined">
						{{icon}}
					</span>
				</span>
				<h3>
					{{ item.title }}
				</h3>
				<h4 class="font-light">
					{{ item.time }}・{{ item.company }}
				</h4>
				<p class="sm:text-base sm:text-justify pt-2"> {{ item.description }}</p>
			</li>
		</div>
	</ol>
</template>

<script setup>
const props = defineProps({
	item: Array,
	icon: String,
});

</script>