<template>
  <div>
    <div class="col p-4 border border-3 border-primary mb-4">
      <h4 class="display-3 mb-4 text-primary">
        <i class="bi display-3 me-3 me-md-4" :class="blok.icon"></i
        >{{ blok.name }}
      </h4>
      <div
        v-for="(tag, index) in blok.tags.split(',')"
        :key="index"
        class="bg-danger text-light d-inline-block me-2 mb-2 py-1 px-2"
      >
        {{ tag.trim() }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
.col {
  transition: transform 0.3s ease-in-out;
}

.col:hover {
  transform: scale(1.05);
}
</style>
