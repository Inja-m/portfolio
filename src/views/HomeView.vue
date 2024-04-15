<template>
  <div class="container">
		<h1 class="text-center sm:text-left">
      Moin, ich bin 
			<router-link to="/about">
        <span class="link font-black">Inja!</span>
      </router-link> 
		</h1>
		<h1 class="text-center sm:text-left">
			UX/UI Designer und Webentwickler
		</h1>
		<h2 class="text-end py-2">
			mit Hintergrund in wissenschaftlicher Forschung.
		</h2>
	</div>  
	<div class="container m-6 sm:m-0"></div>
	<div class="container mt-4 sm:mt-12">
		<h4 class="text-surface-800 tracking-wide uppercase font-light"> Ausgewähltes Projekt </h4>
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
