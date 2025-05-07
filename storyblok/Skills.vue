<template>
  <section id="skills" class="container pt-5 pb-4 mb-5">
    <h3 class="display-1 text-primary mb-4 overflow-hidden lh-base">
      <div ref="h3"><span class="text-danger">/</span>{{ blok.heading }}</div>
    </h3>
    <div ref="skillsContainer" class="row row-cols-1 mx-0">
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
const h3 = ref(null)
const skillsContainer = ref(null)
const { slideIn, scaleInMultiple } = useAnimations()

onMounted(() => {
  slideIn(h3.value)
  scaleInMultiple(skillsContainer.value)
})
</script>

<style scoped>
h3 {
  transition: transform 0.3s ease-in-out;
}

h3:hover {
  transform: translateX(10px);
}
</style>
