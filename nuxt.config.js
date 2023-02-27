export default {
  head: {
    title: "nuxt-sitemap-edgio-example",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  target: "server",
  ssr: true,
  // This only works with "npm run generate" which is never reached in case of a target server with Nuxt standalone builds.
  // To figure this part out, please check the updated edgio:build && edgio:deploy commands in package.json.
  generate: { fallback: true },
  components: true,
  buildModules: ["@edgio/nuxt/module"],
  modules: ["@nuxtjs/sitemap"],
  // Nuxt GH Issue: https://github.com/nuxt/nuxt/issues/10751
  build: {
    extend(config) {
      config.resolve.alias["node-fetch-native"] = require.resolve("node-fetch");
    },
  },
  sitemap: {
    hostname: "https://rishi.app",
    gzip: true,
    routes: [
      "/page/1",
      "/page/2",
      {
        url: "/page/3",
        changefreq: "daily",
        priority: 1,
        lastmod: "2017-06-30T13:30:00.000Z",
      },
    ],
  },
};
