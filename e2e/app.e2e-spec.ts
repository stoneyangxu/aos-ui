import { AosUiPage } from './app.po';

describe('aos-ui App', () => {
  let page: AosUiPage;

  beforeEach(() => {
    page = new AosUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aos works!');
  });
});
