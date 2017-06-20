import { GridTestPage } from './app.po';

describe('grid-test App', () => {
  let page: GridTestPage;

  beforeEach(() => {
    page = new GridTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
