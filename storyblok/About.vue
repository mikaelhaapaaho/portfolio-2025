<template>
  <section id="about" class="container pt-5 pb-4 mb-5">
    <h3 class="display-1 text-primary overflow-hidden mb-4 lh-base">
      <div><span class="text-danger">/</span>{{ blok.heading }}</div>
    </h3>
    <div class="row row-cols-1 row-cols-lg-2 text-primary mb-5">
      <div class="col mb-4 mb-lg-0">
        <div class="bg-light h-100 d-flex flex-column">
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
          <div class="border border-3 border-primary p-4 flex-grow-1">
            <div v-html="text"></div>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <div
          class="border border-3 border-primary px-5 h-100 d-flex align-items-end position-relative bg-light"
        >
          <div class="position-absolute top-0 end-0 me-3 mt-2 rotate">
            <i class="bi bi-flower1 text-danger display-2"></i>
          </div>
          <img
            class="img-fluid px-0 px-md-5 px-lg-0 px-xl-5 pt-4"
            :src="blok.image.filename"
            :alt="blok.image.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
const text = renderRichText(props.blok.text)

// Age and experience calculations
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

@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate360 10s linear infinite;
}
</style>
