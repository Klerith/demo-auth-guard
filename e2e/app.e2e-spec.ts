import { RutasAppPage } from './app.po';

describe('rutas-app App', () => {
  let page: RutasAppPage;

  beforeEach(() => {
    page = new RutasAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
