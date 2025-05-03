<template>
  <img
    class="img-fluid border border-3 border-primary"
    :src="blok.image.filename"
    :alt="blok.description"
    @click="$emit('imageClick', blok)"
    style="cursor: pointer"
  />
</template>

<script setup>
const props = defineProps({ blok: Object })
defineEmits(["imageClick"])
</script>

<style scoped>
.img-fluid {
  transition: transform 0.3s ease-in-out;
}

.img-fluid:hover {
  transform: scale(1.05);
}
</style>
