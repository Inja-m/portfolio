<template>
  <div class="container">
		<h1 class="outlined font-black text-center sm:text-left sm:text-5xl text-3xl">
      Moin, ich bin 
			<router-link to="/about">
        <span class="link font-black">Inja!</span>
      </router-link> 
		</h1>
		<h1 class="outlined font-black text-center sm:text-left sm:text-5xl text-3xl">
			UX/UI Designer und Webentwickler
		</h1>
		<h2 class="text-surface-800 font-bold text-xl text-end">
			mit Hintergrund in wissenschaftlicher Forschung.
		</h2>
	</div>  
	<div class="container sm:py-16 py-12">
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
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 1px rgb(var(--surface-800));
}

.link{
	-webkit-text-fill-color: rgb(var(--primary-500));
	-webkit-text-stroke: 1px rgb(var(--surface-800));
}

.link:hover {
	-webkit-text-fill-color: white;
	-webkit-text-stroke: 1px rgb(var(--surface-800));
}
</style>