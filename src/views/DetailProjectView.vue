<template>
	<div>
		<div :class="`bg-${project.colour}-200`">
			<div class="container sm:grid sm:grid-cols-2 sm:py-16 py-4">
				<div class="flex justify-center sm:justify-end items-center">
					<img class="sm:h-96 h-60" :src="getUrl(project.imageSrc)" alt="Projektbild" />
				</div>
				<div class="flex justify-center items-center">
					<div class="sm:p-8">
						<h2>
							{{ project.title }}
						</h2>
						<p class="text-base text-justify pt-2">{{ project.description }}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-for="(content, index) in project.content" :key="content.subtitle">
			<div :class="index % 2 === 0 ? '' : `bg-${project.colour}-100`">
				<div class="container py-10">
					<h3>
						{{ content.subtitle }}
					</h3>
					<p class="text-base text-justify pt-2">{{ content.description }}</p>
					<div v-for="(media) in content.media">
						<div v-if="media.imageSrc" class="pt-10">
							<div class="flex justify-center items-center">
								<img :src="getUrl(media.imageSrc)" alt="Projektbild" class="max-h-60 sm:max-h-96" />
							</div>
						</div>
						<div v-if="media.videoSrc" class="pt-10">
							<video :src="getUrl(media.videoSrc)" controls controlsList="nodownload"></video>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import projectContent from '@/content/projects.json'

const route = useRoute()
const projectId = Number(route.params.id)
const project = projectContent.find((item) => item.id === projectId)

function getUrl(src) {
	return new URL(`../assets/${src}`, import.meta.url)
}

</script>
