<template>
	<div class="container">
		<h1 class="outlined font-bold text-center sm:text-left sm:text-5xl text-3xl">
      Entdecke meine Projekte
		</h1>
		<h2 class="text-surface-800 font-semibold text-xl text-center sm:text-end py-4">
			Jedes Projekt ist eine Gelegenheit für mich, meinen Horizont zu erweitern und Neues zu lernen.
		</h2>
		
		<div v-for="project in projectContent" :key="project.id">
			<div class=" my-6 sm:mb-20">
				<ProjectCard :id="project.id" 
					:title="project.title" 
					:content="project.description" 
					:imageSrc="project.imageSrc"
					:bgColour="project.colour" 
					:imgLeft="project.id === 2 ? true : false"></ProjectCard>
			</div>

		</div>
	</div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

import projectContent from '@/content/projects.json'
</script>
