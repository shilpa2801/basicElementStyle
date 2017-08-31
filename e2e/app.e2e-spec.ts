import { BasicElementStylePage } from './app.po';

describe('basic-element-style App', () => {
  let page: BasicElementStylePage;

  beforeEach(() => {
    page = new BasicElementStylePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
