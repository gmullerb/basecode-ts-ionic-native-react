//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const { SpecReporter } = require('jasmine-spec-reporter')
const jasmineReporters = require('jasmine-reporters')
const cordovaServe = require('cordova-serve')
const path = require('path')

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

const appServer = cordovaServe()

exports.config = {
  allScriptsTimeout: 60000,
  baseUrl: 'http://localhost:8000/',
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
    browser.ignoreSynchronization = true
    browser.wait(appServer.servePlatform('browser', {
      port: 8000,
      noServerInfo: false,
      root: path.join(__dirname, '../../cordova')
    })
      .catch(() => {
        if (appServer.server) {
          appServer.server.close()
        }
      })
    )
    require('@babel/register')({
      extensions: ['.js'],
      presets: ['@babel/preset-env']
    })
    addJasmineReporters()
  },
  onCleanUp() {
    if (appServer.server) {
      appServer.server.close()
    }
  },
  specs: [
    '../../src/e2e/**/*.e2e.js'
  ]
}
