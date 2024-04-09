<template>
  <div v-for="project in projectContent" :key="project.id">
    <ProjectCard
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
</script>
