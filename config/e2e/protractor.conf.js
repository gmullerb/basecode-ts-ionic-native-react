//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');

const addJasmineReporters = () => {
  const jasmineEnv = jasmine.getEnv()
  jasmineEnv.addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }))
  jasmineEnv.addReporter(new jasmineReporters.JUnitXmlReporter({
    savePath: 'build/reports/e2e'
  }))
}

exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200/',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ '--no-sandbox' ]
    }
  },
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  onPrepare() {
    browser.ignoreSynchronization = true;
    require("@babel/register")({
      extensions: [".js"],
      presets: ['@babel/preset-env']
    })
    addJasmineReporters()
  },
  specs: [
    '../../src/e2e/**/*.e2e.js'
  ]
};
