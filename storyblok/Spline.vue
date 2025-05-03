<template>
  <section id="top" class="w-100 vh-100">
    <canvas
      class="h-100"
      style="cursor: pointer"
      ref="canvas"
      @click="removeHint"
    />
    <i
      ref="hint"
      class="position-absolute start-50 top-50 bi bi-hand-index-thumb text-light display-1"
      v-if="blok.hint"
    ></i>
  </section>
  <!-- <div class="border-top border-3 border-primary"></div> -->
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
i {
  pointer-events: none;
  animation: scaleAnimation 2s infinite ease-in-out;
}

@keyframes scaleAnimation {
  0% {
    transform: translate(-50%, -50%) rotate(-20deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-20deg) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-20deg) scale(1);
  }
}

.fade {
  transition: 0.3s;
  opacity: 0;
}
</style>
