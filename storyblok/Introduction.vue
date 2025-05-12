<template>
  <section id="introduction" class="container pb-4 mb-5">
    <div>
      <i class="bi bi-quote display-1 text-danger"></i>
      <div class="border border-primary border-3 p-4">
        <h2 class="my-4" style="white-space: pre-line">
          {{ blok.text }}
        </h2>
      </div>
      <div style="transform: rotate(180deg)">
        <i class="bi bi-quote display-1 text-danger"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
section {
  transition: transform 0.3s ease-in-out;
}

section:hover {
  transform: scale(1.05);
}
</style>
