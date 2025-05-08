<template></template>

<script setup>
import { useI18n } from "vue-i18n"
import { useRequestURL } from "#app"

const { locale } = useI18n()
const props = defineProps({ blok: Object })
const url = useRequestURL()

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
      content: url.href,
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
      href: url.href,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": url.href,
        name: props.blok.title,
        description: props.blok.description,
        url: url.href,
        image: {
          "@type": "ImageObject",
          url: props.blok.image.filename,
        },
        inLanguage: locale.value,
        publisher: {
          "@type": "Organization",
          "@id": `${url.origin}/#organization`,
          name: props.blok.title,
          logo: {
            "@type": "ImageObject",
            url: props.blok.image.filename,
          },
        },
        mainEntity: {
          "@type": "WebPage",
          name: props.blok.title,
          description: props.blok.description,
        },
      }),
    },
  ],
})
</script>
