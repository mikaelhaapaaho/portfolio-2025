<template>
  <div class="modal fade p-0" id="workModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-light" @click="closeModal">
        <div class="container p-0">
          <div class="d-flex justify-content-end" @click.stop>
            <button
              class="btn border-0 px-0 py-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="bi bi-arrow-return-left display-5 text-danger"></i>
            </button>
          </div>
        </div>
        <div class="modal-body pt-0">
          <div class="container p-0">
            <img
              v-if="activeWork"
              :src="activeWork.image.filename"
              class="img-fluid"
              :alt="activeWork.image.alt"
              loading="lazy"
            />
            <h1
              v-if="activeWork"
              class="modal-title text-primary display-3 fw-bold lh-sm my-4"
            >
              {{ activeWork.heading }}
            </h1>
            <div v-if="activeWork" class="row">
              <StoryblokComponent
                v-for="blok in activeWork.sections"
                :key="blok._uid"
                :blok="blok"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  activeWork: {
    type: Object,
    default: null,
  },
})

const { $bootstrap } = useNuxtApp()

const closeModal = () => {
  const modal = $bootstrap.Modal.getInstance(
    document.getElementById("workModal")
  )
  modal?.hide()
}
</script>
