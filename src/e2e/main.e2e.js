//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import {browser, by, element, ExpectedConditions} from 'protractor';

describe('Main test', () => {
  it('shouldHaveH1WithTitle', (done) => {
    browser.get('/')
      .catch(() => done.fail('Unable to reach the host'))
    browser.wait(ExpectedConditions.titleContains('Base Typescript Ionic React App'), 5000)
      .catch(() => done.fail('Unable to reach the host'))
    element(by.id('test'))
      .getText()
      .then((text) => {
        expect(text).toContain('The Typescript Ionic React App')
        done()
      }, () => {
        done.fail()
      })
  })
})
