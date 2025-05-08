<template>
  <div :class="blok.width" class="col-12 mb-3">
    <div
      ref="videoContainer"
      class="position-relative bg-primary"
      :style="{ padding: `${blok.padding}% 0 0 0` }"
    >
      <div
        class="position-absolute start-0 top-0 h-100 w-100 d-flex align-items-center justify-content-center"
      >
        <div
          class="spinner-border text-light"
          role="status"
          style="width: 4rem; height: 4rem"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <iframe
        v-if="isLoaded"
        ref="iframe"
        class="position-absolute start-0 top-0 h-100 w-100"
        :src="`${blok.link}&background=1&dnt=1&api=1`"
        @load="handleIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const isLoaded = ref(false)
const videoContainer = ref(null)
const iframe = ref(null)

const loadVimeoAPI = () => {
  if (window.Vimeo) return Promise.resolve(window.Vimeo)

  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.onload = () => resolve(window.Vimeo)
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const handleIframeLoad = async () => {
  try {
    await loadVimeoAPI()
    new window.Vimeo.Player(iframe.value)
  } catch (error) {
    console.error("Error loading Vimeo player:", error)
  } finally {
    isLoaded.value = true
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isLoaded.value = true
        observer.disconnect()
      }
    },
    {
      root: null,
      rootMargin: "100px",
      threshold: 0.01,
    }
  )

  if (videoContainer.value) {
    observer.observe(videoContainer.value)
  }
})
</script>
