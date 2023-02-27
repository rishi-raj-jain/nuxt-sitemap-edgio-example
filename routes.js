// This file was added by edgio init.
// You should commit this file to source control.

const { nuxtRoutes } = require("@edgio/nuxt");
const { Router } = require("@edgio/core/router");

const router = new Router();

router.match("/service-worker.js", ({ serviceWorker }) => {
  serviceWorker(".nuxt/dist/client/service-worker.js");
});

// Sitemap specific files
router.match("/sitemap.xml", ({ serveStatic }) => {
  serveStatic("dist/sitemap.xml");
});
router.match("/sitemap.xml.gz", ({ serveStatic }) => {
  serveStatic("dist/sitemap.xml.gz");
});

router.use(nuxtRoutes);

export default router;
