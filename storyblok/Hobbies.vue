<template>
  <section id="hobbies" class="container pt-5 pb-4 mb-5">
    <h3 class="display-1 text-primary overflow-hidden lh-base mb-4">
      <div><span class="text-danger">/</span>{{ blok.heading }}</div>
    </h3>
    <iframe
      class="border border-primary border-3"
      style="background: linear-gradient(to bottom, #1f1f1f 50%, #121212 50%)"
      src="https://open.spotify.com/embed/artist/6lpoIaNaKJoYix2dvm8tQU?utm_source=generator&theme=0"
      width="100%"
      height="470"
      frameBorder="0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <div ref="masonryRow" class="row" data-masonry='{"percentPosition": true }'>
      <div
        v-for="blok in blok.images"
        :key="blok._uid"
        class="col-6 col-md-4 col-lg-3 g-4 masonry-item"
      >
        <StoryblokComponent :blok="blok" @imageClick="openModal" />
      </div>
    </div>
    <div
      class="modal fade p-0"
      id="imageModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-primary bg-opacity-75" @click="closeModal">
          <div
            class="modal-body p-0 d-flex align-items-center justify-content-center min-vh-100"
          >
            <div class="px-3 px-sm-5" @click.stop>
              <div class="d-flex justify-content-end">
                <button
                  class="btn border-0 px-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="bi bi-arrow-return-left display-5 text-light"></i>
                </button>
              </div>
              <div class="position-relative">
                <img
                  v-if="activeImage"
                  :src="activeImage.image.filename"
                  class="img-fluid w-100"
                  :alt="activeImage.description"
                  loading="lazy"
                  style="max-height: 90vh"
                />
                <div
                  class="position-absolute bottom-0 start-0 bg-primary text-light px-3 py-2"
                >
                  {{ activeImage?.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
const masonryRow = ref(null)
const { $bootstrap } = useNuxtApp()
const activeImage = ref(null)

const openModal = (image) => {
  activeImage.value = image
  const modal = new $bootstrap.Modal(document.getElementById("imageModal"))
  modal.show()
}

const closeModal = () => {
  const modal = $bootstrap.Modal.getInstance(
    document.getElementById("imageModal")
  )
  modal?.hide()
}

onMounted(async () => {
  // Import and initialize Masonry
  const Masonry = (await import("masonry-layout")).default

  // Wait for images to load
  await new Promise((resolve) => setTimeout(resolve, 100))

  // Initialize Masonry
  new Masonry(masonryRow.value, {
    itemSelector: ".masonry-item",
    percentPosition: true,
  })
})
</script>

<style scoped>
h3 {
  transition: transform 0.3s ease-in-out;
}

h3:hover {
  transform: translateX(10px);
}
</style>
