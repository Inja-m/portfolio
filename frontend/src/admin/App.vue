<template>
	<div class="flex flex-col min-h-screen justify center">
		<div class="container my-3 sm:my-6">
			<Navbar :links="navLinks" />
		</div>
		<div class="flex-grow flex-col flex justify-center">
			<RouterView />
		</div>
	</div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

const navLinks = [
	{ path: '/admin/logout', label: 'Abmelden' }
]

</script>