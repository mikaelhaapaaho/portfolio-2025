<template>
  <div class="w-100 bg-primary py-5">
    <div class="container">
      <div class="row row-cols-3 row-cols-lg-6" ref="logosContainer">
        <div
          v-for="(logo, index) in blok.logos"
          class="col p-4 p-sm-5 d-flex align-items-center"
          :key="index"
        >
          <img
            class="img-fluid p-2 p-lg-0"
            :src="logo.filename"
            :alt="logo.alt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const logosContainer = ref(null)
const { scaleIn } = useAnimations()

onMounted(() => {
  if (logosContainer.value) {
    scaleIn(logosContainer.value)
  }
})
</script>

<style scoped>
img {
  filter: brightness(0) saturate(100%) invert(90%) sepia(13%) saturate(466%)
    hue-rotate(340deg) brightness(108%) contrast(98%);
}
</style>
