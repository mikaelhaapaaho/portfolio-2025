<template>
  <footer class="position-relative">
    <div
      class="position-absolute start-0 bottom-100 btn btn-lg bg-danger text-light rounded-0"
      style="pointer-events: none"
    >
      {{ blok.contact }} <i class="bi bi-link-45deg"></i>
    </div>
    <div
      ref="inlineFooter"
      class="rounded-0 border-0 card card-body bg-light border-top border-primary border-3"
    >
      <FooterContent :blok="blok" />
    </div>
    <div ref="collapseFooter" class="position-fixed start-0 bottom-0 w-100">
      <button
        class="btn btn-lg btn-danger text-light rounded-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse"
        aria-expanded="false"
        aria-controls="collapse"
      >
        {{ blok.contact }} <i class="bi-link-45deg"></i>
      </button>
      <div class="collapse" id="collapse">
        <div
          class="rounded-0 border-0 card card-body bg-light border-top border-primary border-3"
        >
          <FooterContent :blok="blok" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterContent from "./FooterContent.vue"

const props = defineProps({ blok: Object })

const inlineFooter = ref(null)
const collapseFooter = ref(null)

let observer

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (collapseFooter.value) {
      if (entry.isIntersecting) {
        collapseFooter.value.style.display = "none"
      } else {
        collapseFooter.value.style.display = "block"
      }
    }
  })
}

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0,
  })
  if (inlineFooter.value) {
    observer.observe(inlineFooter.value)
  }
})

onUnmounted(() => {
  if (observer && inlineFooter.value) {
    observer.unobserve(inlineFooter.value)
  }
})
</script>
