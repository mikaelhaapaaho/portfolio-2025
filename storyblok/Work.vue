<template>
  <section id="work" class="container pt-5 pb-4 mb-5">
    <h3 class="display-1 text-primary mb-4 overflow-hidden lh-base">
      <div><span class="text-danger">/</span>{{ blok.heading }}</div>
    </h3>
    <div class="row row-cols-1 row-cols-md-2">
      <StoryblokComponent
        v-for="blok in blok.links"
        :key="blok._uid"
        :blok="blok"
        @update:activeWork="activeWork = $event"
      />
    </div>
    <div class="d-none">
      <div v-for="work in blok.links" :key="work._uid">
        <StoryblokComponent
          v-for="section in work.sections"
          :key="section._uid"
          :blok="section"
        />
      </div>
    </div>
    <WorkModal :active-work="activeWork" />
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
const activeWork = ref(null)
</script>

<style scoped>
h3 {
  transition: transform 0.3s ease-in-out;
}

h3:hover {
  transform: translateX(10px);
}
</style>
