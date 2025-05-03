// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "fi"],
    defaultLocale: "en",
  },
  app: {
    head: {
      title: "Mikael Haapa-aho",
      meta: [
        {
          name: "description",
          content:
            "Graphic designer and a front-end developer. Take a look at some of my works.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap",
        },
      ],
    },
  },
  css: [
    "bootstrap-icons/font/bootstrap-icons.css",
    "~/assets/styles/main.scss",
  ],
})
