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
        v-if="isVisible"
        ref="iframe"
        class="position-absolute start-0 top-0 h-100 w-100"
        :src="`${blok.link}&background=1&dnt=1&api=1`"
        allow="autoplay"
        @load="handleIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const isVisible = ref(false)
const videoContainer = ref(null)
const iframe = ref(null)

const loadVimeoAPI = () => {
  return new Promise((resolve, reject) => {
    if (window.Vimeo) {
      resolve(window.Vimeo)
      return
    }

    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.onload = () => resolve(window.Vimeo)
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const handleIframeLoad = async (event) => {
  try {
    await loadVimeoAPI()
    const player = new window.Vimeo.Player(iframe.value)
  } catch (error) {
    console.error("Error accessing iframe:", error)
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    }
  )

  if (videoContainer.value) {
    observer.observe(videoContainer.value)
  }
})
</script>
