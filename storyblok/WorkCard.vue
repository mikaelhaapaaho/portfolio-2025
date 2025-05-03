<template>
  <div
    class="mb-4 text-decoration-none"
    @click="openModal"
    style="cursor: pointer"
  >
    <div class="col card h-100 bg-light text-primary border-0 rounded-0 card">
      <img
        :src="blok.image.filename"
        class="card-img-top rounded-0 border border-3 border-primary border-bottom-0"
        alt="..."
        loading="lazy"
      />
      <div class="card-body border border-3 border-primary">
        <h4>{{ blok.heading }}</h4>
        <div class="card-text mb-1">
          {{ blok.description }}
        </div>
        <i class="bi bi-arrow-return-right fs-4 text-danger"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const { $bootstrap } = useNuxtApp()

const openModal = () => {
  // Emit an event to update the active work in the parent
  emit("update:activeWork", props.blok)

  // Show the modal using Bootstrap
  const modal = new $bootstrap.Modal(document.getElementById("workModal"))
  modal.show()
}

const emit = defineEmits(["update:activeWork"])
</script>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
