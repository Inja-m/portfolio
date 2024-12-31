<template>
	<nav class="bg-white">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
			<router-link to="/" >
				<img src="@/assets/logo.svg" alt="Logo"
					class="h-8 w-8 md:h-16 md:w-16 transform hover:-rotate-12 transition duration-300 ease-in-out" @click="toggleMenu(false)" />
			</router-link>
			<button type="button" @click="toggleMenu"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
				<span class="material-symbols-outlined"> menu </span>
			</button>
			<div class="hidden w-full md:block md:w-auto">
				<ul class="font-medium text-lg flex md:flex-row md:space-x-4">
					<li>
						<router-link to="/"
							:class="{ 'text-surface-800': $route.path === '/', 'text-surface-600 font-light': $route.path !== '/' }">Home</router-link>
					</li>
					<li>
						<router-link to="/projects" :class="{'text-surface-800': $route.path === '/projects', 'text-surface-600 font-light': $route.path !== '/projects'}">Projekte</router-link>
					</li>
					<li>
						<router-link to="/about" :class="{'text-surface-800 ': $route.path === '/about','text-surface-600 font-light': $route.path !== '/about'}">Über mich</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div v-if="isMobileMenuOpen" class="md:hidden w-full" >
      <ul class="flex-col font-medium mt-4">
    <li @click="toggleMenu">
      <router-link to="/" class="block py-2 px-3 text-right text-lg" :class="{ 'text-white bg-primary-600': $route.path === '/', 'text-surface-600': $route.path !== '/' }" aria-current="page">Home</router-link>
    </li>
    <li @click="toggleMenu">
      <router-link to="/projects" class="block py-2 px-3 text-right  text-lg" :class="{ 'text-white bg-primary-600': $route.path === '/projects', 'text-surface-600': $route.path !== '/projects' }">Projekte</router-link>
    </li>
    <li @click="toggleMenu">
      <router-link to="/about" class="block py-2 px-3 text-right  text-lg" :class="{ 'text-white bg-primary-600': $route.path === '/about', 'text-surface-600': $route.path !== '/about' }">Über mich</router-link>
    </li>
  </ul>
    </div>
	</nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

function toggleMenu(test) {
	if(test === false || test === true){
		isMobileMenuOpen.value = test
	} else{
		isMobileMenuOpen.value = !isMobileMenuOpen.value
	}
}
</script>
