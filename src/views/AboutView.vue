<template>
	<div class="container">
		<div class="container grid sm:grid-cols-5">
			<div class="col-span-3 ">
				<h1 class="outlined font-black text-center sm:text-left sm:text-5xl text-3xl">
      Moin, ich bin 
			<router-link to="/about" class="link font-black"> Inja! </router-link> 
		</h1>
			<div class="text-base text-justify mt-5">
				Derzeit befinde ich mich im Masterstudium der Medieninformatik an der Universität zu Lübeck und plane voraussichtlich, 
				dieses im Frühjahr 2025 abzuschließen. 
				In meiner Freizeit widme ich mich gerne verschiedenen kreativen Projekten. 
				Sei es das Skizzieren, das Nähen individueller Stücke oder das Gestalten von Grafiken, 
				die ich anschließend mit meinem Plotter umsetzen kann.
				Zudem bin ich gerne in Bewegung und probiere gerne neue Sportarten aus. 
				Gerade der Handball begleitet mich schon eine lange Zeit.
				Abgesehen von meiner Leidenschaft für Handball und kreative Projekte hege ich auch eine Vorliebe für alte Vespas.
			</div>
			</div>
			<div class="col-span-2 w-64 mx-auto">
				<img src="@/assets/me.png">
			</div>
		</div>
	</div>
	<div class="container grid sm:grid-cols-5 sm:py-12 py-6">
		<div class="col-span-3">
			<h1 class="text-surface-800 font-semibold text-xl px-8 py-4">
				Berufserfahrung
			</h1>
			<Timeline :value="experienceContent" align="left" class="customized-timeline">
				<template #marker="slotProps">
					<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" class="my-3">
						<path
							d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
					</svg>
				</template>
				<template #content="slotProps">
					<h2 class="text-surface-800 font-semibold text-xl">
						{{ slotProps.item.title }}
					</h2>
					<h3 class="font-light">
						{{ slotProps.item.time }}・{{ slotProps.item.company }}
					</h3>
					<p class="text-surface-800 text-base text-justify pt-2"> {{ slotProps.item.description }}</p>
				</template>
			</Timeline>

		</div>
		<div class="col-span-2">
			<h1 class="text-surface-800 font-semibold text-xl px-8 py-4">
				Ausbildung
			</h1>
			<Timeline :value="educationContent" align="left" class="customized-timeline">
				<template #marker="slotProps">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="my-3">
						<path
							d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
					</svg>
				</template>
				<template #content="slotProps">
					<h2 class="text-surface-800 font-semibold text-xl">
						{{ slotProps.item.title }}
					</h2>
					<h3 class="font-light">
						{{ slotProps.item.time }}・{{ slotProps.item.location }}
					</h3>

				</template>
			</Timeline>
		</div>
	</div>
</template>

<script setup>
import Timeline from 'primevue/timeline'

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
