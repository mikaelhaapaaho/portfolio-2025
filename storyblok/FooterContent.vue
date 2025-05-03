<template>
  <div class="row row-cols-1 row-cols-md-2 text-primary">
    <div class="col mb-3">
      <div class="m-1">{{ blok.contactText }}</div>
      <StoryblokComponent
        v-for="blok in blok.contactLinks"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <div class="col mb-3 text-start text-md-end">
      <div>
        <div class="m-1">{{ blok.linksText }}</div>
        <StoryblokComponent
          v-for="blok in blok.directLinks"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
