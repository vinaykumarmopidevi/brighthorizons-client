module.exports = {
  default: {
    require: [
      'cucumber/**/**/*.ts' // Include step definitions
    ],
    format: [
      '@cucumber/pretty-formatter',
      ['html', 'output/cucumber-report.html'],
      ['junit', 'output/cucumber-report.xml'],
      ['usage', 'output/cucumber-steps.txt'],
      ["json", "output/cucumber-report.json"],
    ],
    requireModule: ["ts-node/register"]
  }
};
