<template>
	<div class="container">
		<div v-for="project in projectContent" :key="project.id">
			<div class=" my-6 sm:my-16">
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
