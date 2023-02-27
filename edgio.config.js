"use strict";

module.exports = {
  connector: "@edgio/nuxt",
  includeNodeModules: true,
  // Add the sitemap routes json to the server build
  includeFiles: {
    ".nuxt/dist/sitemap-routes.json": true,
  },
};
