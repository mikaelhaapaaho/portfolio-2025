// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  nitro: {
    preset: "netlify",
  },
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      storyblokVersion: process.env.STORYBLOK_VERSION || "draft",
    },
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
      },
    ],
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "fi"],
    defaultLocale: "en",
  },
  app: {
    head: {
      meta: [{ name: "robots", content: "noindex, nofollow" }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
      script: [
        {
          defer: true,
          src: "https://static.cloudflareinsights.com/beacon.min.js",
          "data-cf-beacon": '{"token": "b350901c979445b5b3ce9085f80cbfb5"}',
        },
      ],
    },
  },
  css: [
    "bootstrap-icons/font/bootstrap-icons.css",
    "~/assets/styles/main.scss",
  ],
})
