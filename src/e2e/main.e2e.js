//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import {browser, by, element, ExpectedConditions} from 'protractor';

describe('Main test', () => {
  it('shouldHaveH1WithTitle', (done) => {
    browser.get('/')
      .catch(() => done.fail('Unable to reach the host'))
    browser.sleep(900) // waits for the splash screen
    browser.wait(ExpectedConditions.titleContains('Base Typescript Ionic Native React App'), 5000)
      .catch(() => done.fail('Unable to reach the host'))
    element(by.id('test'))
      .getText()
      .then((text) => {
        expect(text).toContain('The Typescript Ionic Native React App')
        done()
      }, () => {
        done.fail()
      })
  })
})
