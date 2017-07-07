import { MovieDBAppPage } from './app.po';

describe('movie-db-app App', () => {
  let page: MovieDBAppPage;

  beforeEach(() => {
    page = new MovieDBAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
