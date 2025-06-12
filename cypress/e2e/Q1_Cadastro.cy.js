describe('Fluxo de Cadastro', () => {
  const usuario = {
    documento: '87180825050',
    nome: 'Bruno Tropiano',
    email: 'bruno.testeFeng@email.com',
    nascimento: '08/08/1998',
    ddi: '+55 Brasil',
    telefone: '11929200000',
    senha: 'Testefeng@123'
  };

  beforeEach(() => {
    cy.visit('/');
    cy.get('#register').click();
  });

  it('Deve realizar o cadastro com sucesso usando DDI do Brasil', () => {
    cy.get('#document').type(usuario.documento);
    cy.get('#name').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#birth_date').type(usuario.nascimento);

    cy.get('#ddi').click();
    cy.contains('.ddi_option', usuario.ddi).click();

    cy.get('#cellphone').type(usuario.telefone);
    cy.get('#password').type(usuario.senha);

    cy.get('#submit_button').click();

  });
  });
