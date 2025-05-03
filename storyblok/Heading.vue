<template>
  <div class="position-absolute start-0 top-0 m-4 text-primary">
    <h1 class="fs-4 d-flex align-items-center m-0">
      <i class="bi bi-at d-inline-block fs-2 pe-1"></i>
      Mikael&nbsp;Haapa&#8209;aho
    </h1>
    <h2 class="fs-5 mt-4" style="white-space: pre-line">
      {{ blok.titles }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
h1,
h2 {
  transition: transform 0.3s ease-in-out;
}

h1:hover,
h2:hover {
  transform: translateX(10px);
}
</style>
