// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ],
  ],
  imports: {
    dirs: ["stores"]
  },
  ssr: true,
  app: {
    head: {
      title: "Skin Soko",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        // { "http-equiv": "x-ua-compatible", content: "IE:edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Skin Soko",
        },
        // { name: "theme-color", content: "#eaebed" },
      ],
      noscript: [
        {
          children:
            "We're sorry but this site doesn't work properly without JavaScript enabled. Please enable it to continue.",
        },
      ],
    },
  },

  css: ["@/assets/styles/main.css", "@/assets/styles/main.scss", "@/assets/styles/dashboard.scss"],
});
