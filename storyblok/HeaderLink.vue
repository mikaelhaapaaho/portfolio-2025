<template>
  <li class="nav-item mb-3 mb-lg-0 mx-lg-2 p-2">
    <NuxtLink
      data-anchor-link
      class="nav-link text-light text-decoration-none p-0"
      :to="blok.link"
    >
      {{ blok.name }}
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
.nav-link.active {
  text-decoration: underline !important;
}
</style>
