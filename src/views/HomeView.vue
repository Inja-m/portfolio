<template>
  <div class="container mt-12">
		<h1 class="outlined font-black sm:text-5xl text-3xl">
      Moin, ich bin 
			<span class="text-primary-500 hover:text-transparent">
				<router-link to="/about"> Inja! </router-link> 
			</span>
		</h1>
		<h1 class="outlined font-black sm:text-5xl text-3xl sm:pt-6">
			UX/UI Designer und Webentwickler
		</h1>
		<h2 class="text-surface-800 font-bold text-xl text-end pt-4">
			mit Hintergrund in wissenschaftlicher Forschung.
		</h2>
	</div>  
	<div class="container mt-16">
		<p class="text-surface-800 tracking-wide uppercase font-light"> Ausgewähltes Projekt </p>
		<ProjectCard
	  	:id="project.id"
      :title="project.title"
      :content="project.description"
      :imageSrc="project.imageSrc"
      :bgColour="project.colour"
	  	:imgLeft="project.id === 2 ? true : false"
    ></ProjectCard>
	</div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import projectContent from '@/content/projects.json'

const project = projectContent.find((item) => item.id === 2)

</script>


<style>

.outlined {
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke: 1px rgb(var(--surface-800));
}
</style>