<template>
	<div class="container grid sm:grid-cols-7 gap-8">
		<div class="sm:col-span-4 ">
			<h1 class="sm:text-left text-center">
				Moin, ich bin
				<router-link to="/about" class="link font-black"> Inja! </router-link>
			</h1>
			<p class="text-base text-justify mt-5">
				Derzeit befinde ich mich im Masterstudium der Medieninformatik an der Universität zu Lübeck, 
				welches ich voraussichtlich im Frühjahr 2025 abschließen werde. 
				In meiner Freizeit widme ich mich gerne verschiedenen kreativen Projekten, 
				wie zum Beispiel das Skizzieren, das Nähen individueller Stücke oder auch das Gestalten von Grafiken, 
				welche ich anschließend mit meinem Plotter umsetzen kann. 
				Zudem bin ich gerne in Bewegung und probiere neue Sportarten aus, 
				gerade der Handball begleitet mich schon seit vielen Jahren. 
				Abgesehen davon hege ich auch eine Vorliebe für alte Vespa-Roller aus Italien.
			</p>
		</div>
		<div class="sm:col-span-3 flex justify-center items-center">
			<div class="flex-col flex justify-center gap-6">
						<img src="@/assets/me.png" class="max-h-60">
						<a class="bg-transparent hover:bg-primary-500 font-semibold py-2 border border-surface-800 rounded inline-flex items-center flex justify-center" :href=" getUrl('Lebenslauf.pdf')" target="_blank" >
							<span class="material-symbols-outlined">
								download
							</span>	
							<span>Lebenslauf</span>
						</a>
			</div>
	
		</div>
	</div>
	<div class="container grid sm:grid-cols-7 sm:gap-8 sm:pt-12  pt-6">
		<div class="sm:col-span-4">
			<h2 class="py-4 sm:text-left text-center">
				Berufserfahrung
			</h2>
			<Line :item="experienceContent" icon="school" />

		</div>
		<div class="sm:col-span-3">
			<h2 class="py-4 sm:text-left text-center">
				Ausbildung
			</h2>
			<Line :item="educationContent" icon="work" />
		</div>
	</div>
</template>

<script setup>
import Line from '@/components/Timeline.vue'

import educationContent from '@/content/education.json'
import experienceContent from '@/content/experience.json'

function getUrl(src) {
	return new URL(`../assets/${src}`, import.meta.url)
}
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
