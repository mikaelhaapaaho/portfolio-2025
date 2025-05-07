<template>
  <section id="about" class="container pt-5 pb-4 mb-5">
    <h3 class="display-1 text-primary overflow-hidden lh-base">
      <div ref="h3"><span class="text-danger">/</span>{{ blok.heading }}</div>
    </h3>
    <div
      ref="cols"
      class="row row-cols-1 row-cols-lg-2 align-items-center text-primary"
    >
      <div class="col mb-5 mb-lg-0">
        <div class="bg-light">
          <div class="row m-0 row-cols-3">
            <div
              class="col border border-bottom-0 border-3 border-primary text-center py-4 px-2 d-flex flex-column justify-content-between"
            >
              <div class="display-3 text-danger">
                {{ age }}
              </div>
              <div>{{ blok.ageText }}</div>
            </div>
            <div
              class="col p-0 border-top border-3 border-primary text-center py-4 px-2 d-flex flex-column justify-content-between"
            >
              <div class="display-3 text-danger">{{ experience }}+</div>
              <div>{{ blok.experienceText }}</div>
            </div>
            <div
              class="col p-0 border border-bottom-0 border-3 border-primary text-center py-4 px-2 d-flex flex-column justify-content-between"
            >
              <i class="bi bi-geo-alt display-4 text-danger"></i>
              <div>{{ blok.location }}</div>
            </div>
          </div>
          <div class="border border-3 border-primary p-4">
            <div v-html="text"></div>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <canvas class="w-100" style="aspect-ratio: 1/1" ref="canvas" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
const text = renderRichText(props.blok.text)

import { Application } from "@splinetool/runtime"

const canvas = ref(null)
const h3 = ref(null)
const cols = ref(null)
const { slideIn, scaleIn } = useAnimations()

const state = reactive({
  spline: {
    scene: props.blok.splineLink,
    app: null,
    isLoaded: false,
  },
})

onMounted(async () => {
  const app = new Application(canvas.value)
  await app.load(state.spline.scene)
  state.spline.app = app
  state.spline.isLoaded = true

  slideIn(h3.value)
  scaleIn(cols.value)
})

const age = Math.floor(
  (new Date().getTime() - new Date(1995, 6, 11).getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
)

const experience = new Date().getFullYear() - 2018
</script>

<style scoped>
h3 {
  transition: transform 0.3s ease-in-out;
}

h3:hover {
  transform: translateX(10px);
}

.bg-light {
  transition: transform 0.3s ease-in-out;
}

.bg-light:hover {
  transform: scale(1.05);
}
</style>
