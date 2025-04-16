const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f2yayk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'ddmmyyyy_HHMMss',
    },
  },
});
