const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  experimentalStudio: true,
  experimentalMemoryManagement: true,
  experimentalWebKitSupport: true,
  hideXhr: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  followRedirect: true,
  chromeWebSecurity: false,
  retries: { "openMode": 0, "runMode": 1 },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
});
