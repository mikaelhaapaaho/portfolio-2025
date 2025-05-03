<template>
  <div>
    <PageLoader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>
