module.exports = {
  default: {
    paths: ["src/tests/features"],
    dryRun: false,
    timeout: 30000,
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: "async-await",
    },
    require: ["src/tests/step-definitions/*.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "summary",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
    ],
  },
};
