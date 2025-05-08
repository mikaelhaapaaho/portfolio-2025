<template></template>

<script setup>
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
const props = defineProps({ blok: Object })

useHead({
  title: props.blok.title,
  meta: [
    {
      name: "description",
      content: props.blok.description,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "language",
      content: locale.value,
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
    {
      property: "og:url",
      content: window.location.href,
    },
    {
      property: "og:site_name",
      content: props.blok.title,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: props.blok.title,
    },
    {
      name: "twitter:description",
      content: props.blok.description,
    },
    {
      name: "twitter:image",
      content: props.blok.image.filename,
    },
    {
      rel: "canonical",
      href: window.location.href,
    },
  ],
})
</script>
