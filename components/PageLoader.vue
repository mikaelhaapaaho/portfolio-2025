<template>
  <Transition name="fade">
    <div
      v-if="isLoading || isInitialLoad"
      class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-primary z-3"
    >
      <div class="text-center">
        <div class="text-light mb-5">Mikael&nbsp;Haapa&#8209;aho</div>
        <div
          class="spinner-border text-light"
          role="status"
          style="width: 4rem; height: 4rem"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useLoading } from "~/composables/useLoading"

const { isLoading } = useLoading()
const isInitialLoad = ref(true)

onMounted(() => {
  // Force scroll to top and prevent scrolling
  window.scrollTo(0, 0)
  document.body.style.overflow = "hidden"
  document.body.style.position = "fixed"
  document.body.style.width = "100%"
  document.body.style.top = `-${window.scrollY}px`

  setTimeout(() => {
    isInitialLoad.value = false
    // Restore scrolling and position
    document.body.style.overflow = ""
    document.body.style.position = ""
    document.body.style.width = ""
    document.body.style.top = ""
    window.scrollTo(0, 0)
  }, 1000)
})

// Clean up when component is unmounted
onUnmounted(() => {
  document.body.style.overflow = ""
  document.body.style.position = ""
  document.body.style.width = ""
  document.body.style.top = ""
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
