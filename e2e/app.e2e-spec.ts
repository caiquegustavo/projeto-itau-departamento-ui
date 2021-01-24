import { ProjetoItauDepartamentoUiPage } from './app.po';

describe('projeto-itau-departamento-ui App', () => {
  let page: ProjetoItauDepartamentoUiPage;

  beforeEach(() => {
    page = new ProjetoItauDepartamentoUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
