describe('Fluxo completo de Cadastro e Login - Site Feng Brasil', () => {
  const usuario = {
    documento: '123456789',
    nome: 'Bruno Tropiano',
    email: 'bruno.testeFeng@email.com',
    nascimento: '08/08/1998',
    ddi: '+55 Brasil',
    telefone: '11929200000',
    senha: 'Testefeng@123'
  };

  it('Deve realizar o cadastro com sucesso usando DDI do Brasil', () => {
    cy.visit('/');
    cy.get('#register').click();

    cy.get('#document').type(usuario.documento);
    cy.get('#name').type(usuario.nome);
    cy.get('#email').type(usuario.email);
    cy.get('#birth_date').type(usuario.nascimento);

    cy.get('#ddi').click();
    cy.contains('.ddi_option', usuario.ddi).click();

    cy.get('#cellphone').type(usuario.telefone);
    cy.get('#password').type(usuario.senha);

    cy.get('#submit_button').click();

    // Verifica redirecionamento para a home deslogada após cadastro
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('Deve realizar login com sucesso com os dados cadastrados e fazer logout', () => {
    cy.visit('/');
    cy.get('#login').click();

    cy.get('#login_email').type(usuario.email);
    cy.get('#login_password').type(usuario.senha);
    cy.get('#login_button').click();

    // Verifica redirecionamento para a página home logada
    cy.url().should('include', '/home');
    cy.get('.welcome_message')
      .should('be.visible')
      .and('contain.text', 'Bem-vindo(a), QA!');

    // Logout
    cy.get('#logout_button').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('Deve exibir mensagens de erro para dados inválidos no cadastro', () => {
    cy.visit('/');
    cy.get('#register').click();

    cy.get('#document').type('aoetk'); // inválido
    cy.get('#name').type('Br'); // inválido
    cy.get('#email').type('email_invalido');
    cy.get('#birth_date').type('10/05/2015');
    cy.get('#ddi').click();
    cy.contains('.ddi_option', '+999 PaisDesconhecido').click();
    cy.get('#cellphone').type('123456789012');
    cy.get('#password').type('123');

    cy.get('#submit_button').click();

    cy.get('#document-helper-text').should('contain', 'Documento inválido');
    cy.get('#name-helper-text').should('contain', 'Nome inválido');
    cy.get('#email-helper-text').should('contain', 'E-mail inválido');
    cy.get('#birth_date-helper-text').should('contain', 'Idade mínima é 18');
    cy.get('#cellphone-helper-text').should('contain', 'Telefone inválido');
    cy.get('#password-helper-text').should('contain', 'Senha fraca');
  });

  it('Deve exibir mensagem de erro ao tentar login com campos vazios', () => {
    cy.visit('/');
    cy.get('#login').click();

    cy.get('#login_button').click();
    cy.get('.error-message').should('contain', 'Preencha todos os campos');
  });

  it('Deve exibir mensagem de erro ao tentar login com dados inválidos', () => {
    cy.visit('/');
    cy.get('#login').click();

    cy.get('#login_email').type('email_invalido');
    cy.get('#login_password').type('senhaErrada');
    cy.get('#login_button').click();

    cy.get('.error-message').should('contain', 'E-mail ou senha inválidos');
  });
});
