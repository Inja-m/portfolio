<template>
				<Menubar :model="items">
				<template #start>
					<router-link to="/"> 
						<img src="@/assets/logo.svg" alt="Logo"  class="h-8 w-8 sm:h-20 sm:w-20 transform hover:-rotate-12 transition duration-300 ease-in-out" />
					</router-link>					
				</template>
				<template #item="{ item, props, hasSubmenu }">
					<router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
						<a v-ripple :href="href" v-bind="props.action" @click="navigate">
							<span :class="item.icon" />
							<span class="ml-2">{{ item.label }}</span>
						</a>
					</router-link>
					<a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
						<span :class="item.icon" />
						<span class="ml-2">{{ item.label }}</span>
						<span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
					</a>
				</template>
			</Menubar>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'

import { ref, watch } from 'vue'

const route = useRoute()

const items = ref([
	{
		label: 'Home',
		//icon: 'pi pi-home',
		route: '/',
		active: route.path === '/'
	},
	{
		label: 'Projekte',
		//icon: 'pi pi-folder-open',
		route: '/projects',
		active: route.path === '/projects'
	},
	{
		label: 'Über mich',
		//icon: 'pi pi-user',
		route: '/about',
		active: route.path === '/about'
	}
])

watch(route, (to, from) => {
	items.value.forEach((item) => {
		item.active = item.route === to.path
	})
})
</script>