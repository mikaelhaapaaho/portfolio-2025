<template></template>

<script setup>
const props = defineProps({ blok: Object })

useHead({
  title: props.blok.title,
  meta: [
    {
      name: "description",
      content: props.blok.description,
    },
    {
      property: "og:title",
      content: props.blok.title,
    },
    {
      property: "og:description",
      content: props.blok.description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: props.blok.image.filename,
    },
  ],
})
</script>
