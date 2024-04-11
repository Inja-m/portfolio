<template>
	<div class="container">
		Text Über mich
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
		magna aliquyam erat, sed diam voluptuaa. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
		gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
		elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu.
	</div>
	<div class="container grid sm:grid-cols-2 pt-8">
		<div class="">
			Ausbildung
			<Timeline :value="educationContent" align="left" class="customized-timeline">
				<template #marker="slotProps">
					<span
						class="flex w-[2rem] h-[2rem] items-center justify-center text-white rounded-full z-20 shadow-sm bg-primary-600">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
							<path
								d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
						</svg> </span>
				</template>
				<template #content="slotProps">
					{{ slotProps.item.location }}
					<h2 class="text-surface-800 font-semibold text-xl">
						{{ slotProps.item.title }}
					</h2>
					<p class="text-surface-800 text-base text-justify pt-2">{{ slotProps.item.time }}</p>
				</template>
			</Timeline>
		</div>
		<div>
			Berufserfahrung
			<Timeline :value="experienceContent " align="left" class="customized-timeline">
				<template #marker="slotProps">
					<span
						class="flex w-[2rem] h-[2rem] items-center justify-center text-white rounded-full z-20 shadow-sm bg-primary-600">
						<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
			<path
				d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
		</svg> </span>
				</template>
				<template #content="slotProps">
					{{ slotProps.item.location }}
					<h2 class="text-surface-800 font-semibold text-xl">
						{{ slotProps.item.title }}
					</h2>
					{{ slotProps.item.time }}
					<p class="text-surface-800 text-base text-justify pt-2"> {{ slotProps.item.description }}</p>
				</template>
			</Timeline>
	
		</div>


		
	</div>
</template>

<script setup>
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'

import { ref } from 'vue'

import educationContent from '@/content/education.json'
import experienceContent from '@/content/experience.json'

</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
	::v-deep(.customized-timeline) {
		.p-timeline-event:nth-child(even) {
			flex-direction: row;

			.p-timeline-event-content {
				text-align: left;
			}
		}

		.p-timeline-event-opposite {
			flex: 0;
		}
	}
}
</style>
