<template>
  <div>
    <img :src="project.imageSrc" alt="Projektbild" />

    <h2 class="text-2xl font-bold">{{ project.title }}</h2>
    
    {{ project.description }}

    <div v-for="content in project.content" :key="project.id">
      <h2 class="text-2xl font-bold">{{ content.subtitle }}</h2>
      {{ content.description }}

    </div>

    <!-- Other project details here -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import projectContent from '@/content/projects.json'

const route = useRoute()
const projectId = Number(route.params.id)
const project = projectContent.find(item => item.id === projectId)


</script>
