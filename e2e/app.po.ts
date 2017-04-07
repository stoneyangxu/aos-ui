import { browser, element, by } from 'protractor';

export class AosUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aos-root h1')).getText();
  }
}
