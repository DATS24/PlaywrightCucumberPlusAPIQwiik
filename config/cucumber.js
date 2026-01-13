module.exports = {
  default: {
    paths: ['src/tests/features'], // Path to feature files
    dryRun: false,
    parallel: 2,
    format: ['html:cucumber-report.html', 'summary', 'progress-bar', 'json:reports/cucumber-report.json', 'html:reports/cucumber-report.html'],
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: 'async-await'
    },
    require: [
      '../features/step-definitions/*.ts', // Load step definitions
      '../features/support/*.js' // Load support files/hooks
    ],
    requireModule: ['ts-node/register'], // Enable TypeScript support
    publishQuiet: true
  }
};