<template>
  <main
    class="container-fluid p-0"
    data-bs-spy="scroll"
    data-bs-target="#navbar"
    data-bs-offset="0"
    tabindex="0"
  >
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </main>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
