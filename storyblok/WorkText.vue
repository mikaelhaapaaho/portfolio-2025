<template>
  <div :class="blok.width" class="col-12 mb-4">
    <div class="text-primary" v-html="text"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const text = renderRichText(props.blok.text)
</script>
