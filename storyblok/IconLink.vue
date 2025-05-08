<template>
  <NuxtLink
    class="btn btn-outline-primary border-3 rounded-0 p-0 m-1"
    :to="blok.link"
    target="_blank"
  >
    <i :class="blok.icon" class="bi d-block fs-1 lh-1 p-2"></i>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
.btn {
  transition: all 0.3s ease-in-out;
  will-change: transform;
}

.btn:hover {
  color: var(--bs-light) !important;
  transform: scale(1.2);
}
</style>
