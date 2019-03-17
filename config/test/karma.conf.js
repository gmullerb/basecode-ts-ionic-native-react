//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

var webpackConfig = require('./webpack.config.test.js');

module.exports = function (config) {
  config.set({
    browsers: [ 'ChromeHeadlessNoSandBox' ],
    customLaunchers: {
      ChromeHeadlessNoSandBox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    files: ['testEntryPoint.js'],
    port: 9876,
    frameworks: [ 'jasmine' ],
    preprocessors: {
      'testEntryPoint.js': [ 'webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },
    reporters: [
      'coverage-istanbul',
      'html',
      'junit',
      'mocha'
    ],
    coverageIstanbulReporter: {
      dir: 'build/reports/coverage',
      reports: [
        'lcov',
        'text',
        'text-summary'
      ],
      skipFilesWithNoCoverage: true,
      fixWebpackSourcePath: true,
      thresholds: {
        global: {
          statements: 97,
          branches: 97,
          functions: 97,
          lines: 97,
        },
        each: {
          statements: 95,
          branches: 95,
          functions: 95,
          lines: 95,
        }
      }
    },
    htmlReporter: {
      focusOnFailures: false,
      namedFiles: true,
      outputDir: 'build/reports/tests',
      reportName: 'tests_report'
    },
    junitReporter: {
      outputDir: '../../build/reports/tests',
      outputFile: 'tests_report.xml',
      useBrowserName: false
    },
    autoWatch: false,
    singleRun: true
  });
};
