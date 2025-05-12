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
const iframe = ref(null)

const loadVimeoAPI = () => {
  if (window.Vimeo) return

  const script = document.createElement("script")
  script.src = "https://player.vimeo.com/api/player.js"
  document.head.appendChild(script)
}

const handleIframeLoad = () => {
  if (window.Vimeo && iframe.value) {
    new window.Vimeo.Player(iframe.value)
  }
}

onMounted(loadVimeoAPI)
</script>
