<template>
  <nav class="bg-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <router-link to="/">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="h-8 w-8 md:h-16 md:w-16 transform hover:-rotate-12 transition duration-300 ease-in-out"
          @click="toggleMenu(false)"
        />
      </router-link>
      <button
        type="button"
        @click="toggleMenu"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
      >
        <span class="material-symbols-outlined"> menu </span>
      </button>
      <div class="hidden w-full md:block md:w-auto">
        <ul class="font-medium text-lg flex md:flex-row md:space-x-4">
          <li v-for="link in links" :key="link.path">
            <router-link
              :to="link.path"
              :class="{
                'text-surface-800': $route.path === link.path,
                'text-surface-600 font-light': $route.path !== link.path
              }"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="md:hidden w-full">
      <ul class="flex-col font-medium mt-4">
        <li v-for="link in links" :key="link.path" @click="toggleMenu">
          <router-link
            :to="link.path"
            class="block py-2 px-3 text-right text-lg"
            :class="{
              'text-white bg-primary-600': $route.path === link.path,
              'text-surface-600': $route.path !== link.path
            }"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, defineProps } from 'vue'

defineProps({
	links: {
		type: Array,
		required: true,
		default: () => []
	}
})

const isMobileMenuOpen = ref(false)

function toggleMenu(test) {
  if (test === false || test === true) {
    isMobileMenuOpen.value = test
  } else {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
}
</script>
