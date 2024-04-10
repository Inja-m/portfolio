<template>
	<div>
		<div :class="`bg-${project.colour}-200`">
			<div class="container grid sm:grid-cols-2 py-5">
				<div class="flex justify-center sm:justify-end items-center">
					<img class="sm:h-96 h-60" :src="project.imageSrc" alt="Projektbild" />
				</div>
				<div class="flex justify-center items-center">
					<div class="container p-8">
					<h1 class="text-surface-800 font-semibold text-2xl">
						{{ project.title }}
					</h1>
					<p class="text-surface-800 text-base text-justify mr-12 pt-2">{{ project.description }}</p>
				</div>
			</div>
			</div>
		</div>
		<div v-for="(content, index) in project.content" :key="content.subtitle">
			<div :class="index % 2 === 0 ? '' : `bg-${project.colour}-100`">
				<div class="container py-10">
					<h2 class="text-surface-800 font-semibold text-xl">
						{{ content.subtitle }}
					</h2>
					<p class="text-surface-800 text-base text-justify mr-12 pt-2">{{ content.description }}</p>
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
</script>
