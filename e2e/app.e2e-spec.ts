import { AppPage } from './app.po';

describe('ng5-land App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my Angular 5 Land! by Mr.Hanachoo');
  });
});
