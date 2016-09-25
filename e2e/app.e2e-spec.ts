import { BooklandFrontendPage } from './app.po';

describe('bookland-frontend App', function() {
  let page: BooklandFrontendPage;

  beforeEach(() => {
    page = new BooklandFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
