<template>
	<div class="flex flex-col min-h-screen justify center">
		<div class="container my-3 sm:my-6">
			<Navbar />
		</div>
		<div class="flex-grow flex-col flex justify-center">
			<RouterView />
		</div>
		<div class="container py-10 sm:py-16">
			<Connect />
		</div>
		<div class="container py-3 sm:py-6">
			<Footer />
		</div>
	</div>
</template>

<script setup>
import Navbar from '@/components/shared/Navbar.vue'
import Connect from '@/components/shared/Connect.vue'
import Footer from '@/components/shared/Footer.vue'
</script>

<style></style>