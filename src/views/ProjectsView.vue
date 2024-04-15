<template>
	<div class="container">
		<h1 class="outlined font-bold text-center sm:text-left sm:text-5xl text-3xl">
      Entdecke meine Projekte
		</h1>
		<h2 class="text-surface-800 font-semibold text-xl text-center sm:text-end py-2">
			Jedes Projekt ist eine Gelegenheit für mich, meinen Horizont zu erweitern und Neues zu lernen.
		</h2>
		
		<div v-for="project in projectContent" :key="project.id" class="container mt-10 sm:mt-16">
				<ProjectCard :id="project.id" 
					:title="project.title" 
					:content="project.description" 
					:imageSrc="project.imageSrc"
					:bgColour="project.colour" 
					:imgLeft="project.id === 2 ? true : false"></ProjectCard>
		</div>
	</div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

import projectContent from '@/content/projects.json'
</script>
