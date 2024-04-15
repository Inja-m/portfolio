<template>
	<div class="container">
		<div class="container grid sm:grid-cols-7 sm:gap-8">
			<div class="col-span-4 ">
				<h1 class="sm:text-left text-center">
      Moin, ich bin 
			<router-link to="/about" class="link font-black"> Inja! </router-link> 
		</h1>
			<p class="text-base text-justify mt-5">
				Derzeit befinde ich mich im Masterstudium der Medieninformatik an der Universität zu Lübeck und plane voraussichtlich, 
				dieses im Frühjahr 2025 abzuschließen. 
				In meiner Freizeit widme ich mich gerne verschiedenen kreativen Projekten. 
				Sei es das Skizzieren, das Nähen individueller Stücke oder das Gestalten von Grafiken, 
				die ich anschließend mit meinem Plotter umsetzen kann.
				Zudem bin ich gerne in Bewegung und probiere gerne neue Sportarten aus. 
				Gerade der Handball begleitet mich schon eine lange Zeit.
				Abgesehen von meiner Leidenschaft für Handball und kreative Projekte hege ich auch eine Vorliebe für alte Vespas.
			</p>
			</div>
			<div class="col-span-3 flex justify-center items-center">
				<img src="@/assets/me.png" class="max-h-64">
			</div>
		</div>
	</div>
	<div class="container grid sm:grid-cols-7 sm:gap-8 sm:pt-12  pt-6">
		<div class="sm:col-span-4">
			<h2 class="py-5 sm:text-left text-center">
				Berufserfahrung
			</h2>
			<Line :item="experienceContent" icon="school" />

		</div>
		<div class="sm:col-span-3">
			<h2 class="py-4 sm:text-left text-center">
				Ausbildung
			</h2>
			<Line :item="educationContent" icon="work"/>
		</div>
	</div>
</template>

<script setup>
import Line from '@/components/Timeline.vue'

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
