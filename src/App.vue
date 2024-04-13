<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <div class="container py-3 sm:py-6">
        <Nav />
      </div>
      <RouterView />
    </div>
    <div class="container py-3 sm:py-6">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Nav from '@/components/shared/Navigation.vue'
import Footer from '@/components/shared/Footer.vue'
</script>

<style></style>
