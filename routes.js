// This file was added by edgio init.
// You should commit this file to source control.

const { nuxtRoutes } = require("@edgio/nuxt");
const { Router } = require("@edgio/core/router");

module.exports = new Router()
  .match("/service-worker.js", ({ serviceWorker }) => {
    serviceWorker(".nuxt/dist/client/service-worker.js");
  })
  .use(nuxtRoutes);
