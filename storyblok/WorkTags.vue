<template>
  <div class="mb-4">
    <div
      v-for="(tag, index) in blok.tags.split(',')"
      :key="index"
      class="bg-danger text-light d-inline-block me-2 mb-2 py-1 px-2"
    >
      {{ tag.trim() }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
