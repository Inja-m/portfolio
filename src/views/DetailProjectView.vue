<template>
  <div>
    <div :class="`bg-${project.colour}-200`">
      <div class="container sm:grid sm:grid-cols-3 sm:py-12 py-6 sm:gap-6">
        <!-- Bild -->
        <div class="flex justify-center sm:justify-end items-center">
          <img
            class="sm:h-96 h-60"
            :src="getUrl(project.imageSrc)"
            alt="Projektbild"
          />
        </div>

        <!-- Textbereich -->
        <div
          class="col-span-2 flex flex-col justify-center items-start sm:px-8 px-4"
        >
          <h2>
            {{ project.title }}
          </h2>
          <p class="text-base text-justify pt-2">
            {{ project.description }}
          </p>

          <!-- Info-Grid -->
          <div class="grid sm:grid-cols-2 gap-4 mt-6 w-full text-sm">
            <div v-if="project.time">
              <h3 class="text-sm">Zeitraum</h3>
              <p class="text-sm">{{ project.time }}</p>
            </div>
            <div v-if="project.role">
              <h3 class="text-sm">Rolle</h3>
              <p class="text-sm">{{ project.role }}</p>
            </div>
            <div v-if="project.context">
              <h3 class="text-sm">Kontext</h3>
              <p class="text-sm">{{ project.context }}</p>
            </div>
            <div v-if="project.outcome">
              <h3 class="text-sm">Ergebnis</h3>
              <p class="text-sm">{{ project.outcome }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
		<div class="container sm:grid sm:grid-cols-4 sm:py-12 py-6 sm:gap-6">
<!-- Navigation  -->
    <nav class="sticky top-20 h-fit self-start ml-6">
      <ul
        class="flex flex-col space-y-2 p-4 "
      >
        <li v-for="(content, index) in project.content" :key="index">
          <button
            @click="scrollToSection(index)"
            :class="
              activeSection === index
                ? `text-${project.colour}-600 font-bold`
                : 'text-gray-700'
            "
            class="text-left w-full hover:text-gray-900 transition-colors"
          >
            {{ content.subtitle }}
          </button>
        </li>
      </ul>
    </nav>
		<div class="col-span-3">
			<div
      v-for="(content, index) in project.content"
      :key="content.subtitle"
      :id="`section-${index}`"
    >
      <div :class="index % 2 === 0 ? '' : `bg-${project.colour}-100`">
        <div class="container p-10">
          <h2>
            {{ content.subtitle }}
          </h2>
          <p class="text-base text-justify pt-2">{{ content.description }}</p>
          <div v-for="media in content.media">
            <div v-if="media.imageSrc" class="pt-10">
              <div class="flex justify-center items-center">
                <img
                  :src="getUrl(media.imageSrc)"
                  alt="Projektbild"
                  class="max-h-60 sm:max-h-96"
                />
              </div>
            </div>
            <div v-if="media.videoSrc" class="pt-10">
              <video
                :src="getUrl(media.videoSrc)"
                controls
                controlsList="nodownload"
              ></video>
            </div>
          </div>
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
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const projectId = Number(route.params.id)
const project = projectContent.find((item) => item.id === projectId)
const activeSection = ref(0)

function onScroll() {
  project.content.forEach((_, index) => {
    const section = document.getElementById(`section-${index}`)
    if (section) {
      const top = section.getBoundingClientRect().top
      if (top <= 100 && top >= -section.offsetHeight + 100) {
        activeSection.value = index
      }
    }
  })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function getUrl(src) {
  return new URL(`../assets/${src}`, import.meta.url)
}
function scrollToSection(index) {
  const section = document.getElementById(`section-${index}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
