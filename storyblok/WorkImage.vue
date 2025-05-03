<template>
  <div :class="blok.width" class="mb-3">
    <img class="img-fluid" :src="blok.image.filename" loading="lazy" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
