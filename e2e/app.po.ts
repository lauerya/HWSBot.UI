import { browser, by, element } from 'protractor';

export class HardwareSwapUIPage {
  navigateTo() {
    return browser.get('google.com');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
