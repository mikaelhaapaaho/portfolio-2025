<template>
  <section id="top" class="w-100 vh-100">
    <canvas
      class="h-100"
      style="cursor: pointer"
      ref="canvas"
      @click="removeHint"
    />
    <span
      class="position-absolute start-50 top-50 display-1"
      ref="hint"
      v-if="blok.hint"
    >
      <i class="position-absolute bi bi-hand-index-thumb-fill text-light"></i>
      <i class="position-absolute bi bi-hand-index-thumb text-danger"></i>
    </span>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

import { Application } from "@splinetool/runtime"

const canvas = ref(null)
const state = reactive({
  spline: {
    scene: props.blok.link,
    app: null,
    isLoaded: false,
  },
})

onMounted(async () => {
  const app = new Application(canvas.value)
  await app.load(state.spline.scene)
  state.spline.app = app
  state.spline.isLoaded = true
})

const hint = ref(null)

const removeHint = () => {
  hint.value?.classList.add("fade")
}
</script>

<style scoped>
span {
  pointer-events: none;
  animation: scaleAnimation 2s infinite ease-in-out;
}

.text-light {
  transform: scale(0.95) translateY(2%);
}

@keyframes scaleAnimation {
  0% {
    transform: rotate(-20deg) scale(1);
  }
  50% {
    transform: rotate(-20deg) scale(1.2);
  }
  100% {
    transform: rotate(-20deg) scale(1);
  }
}

.fade {
  transition: 0.3s;
  opacity: 0;
}
</style>
