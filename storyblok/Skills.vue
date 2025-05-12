<template>
  <section id="skills" class="container pt-5 pb-4 mb-5">
    <h3 class="display-1 text-primary mb-4 overflow-hidden lh-base">
      <div><span class="text-danger">/</span>{{ blok.heading }}</div>
    </h3>
    <div class="row row-cols-1 mx-0">
      <StoryblokComponent
        class="p-0"
        v-for="(blok, index) in blok.skills"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
h3 {
  transition: transform 0.3s ease-in-out;
}

h3:hover {
  transform: translateX(10px);
}
</style>
