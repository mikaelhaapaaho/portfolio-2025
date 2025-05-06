<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
let { slug } = useRoute().params

const { locale } = useI18n()
const resolveRelations = ["popular-articles.articles"]
const config = useRuntimeConfig()

const url = slug && slug.length > 0 ? slug.join("/") : "home"

const version = config.public.storyblokVersion

const story = await useAsyncStoryblok(
  url.replace(/\/$/, ""),
  {
    version,
    language: locale.value,
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
)

provide("locale", locale)

console.log("Storyblok version:", version)
</script>
