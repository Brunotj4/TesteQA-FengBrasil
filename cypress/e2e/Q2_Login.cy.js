describe('Login de usuário - Site Feng Brasil', () => {
  const usuario = {
    email: 'bruno.testeFeng@email.com',
    senha: 'Testefeng@123'
  };

  beforeEach(() => {
    cy.visit('/');
    cy.get('#login').click();
  });

  it('Deve realizar login com sucesso e fazer logout', () => {
    // Preenche e envia o formulário de login
    cy.get('#login_email').type(usuario.email);
    cy.get('#login_password').type(usuario.senha);
    cy.get('#login_button').click();

    // Verifica redirecionamento para a página home
    cy.url().should('include', '/home');

    // Verifica se a saudação está visível no elemento com a classe 'welcome_message'
    cy.get('.welcome_message')
      .should('be.visible')
      .and('contain.text', 'Bem-vindo(a), QA!');

    // Faz logout
    cy.get('#logout_button').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/'); // Volta para home deslogada
  });

  it('Deve exibir mensagem de erro ao tentar login com campos vazios', () => {
    cy.get('#login_button').click();
    cy.get('.error-message').should('contain', 'Preencha todos os campos');
  });

  it('Deve exibir mensagem de erro ao tentar login com dados inválidos', () => {
    cy.get('#email').type('email_invalido');
    cy.get('#password').type('senhaErrada');
    cy.get('#login_button').click();
    cy.get('.error-message').should('contain', 'E-mail ou senha inválidos');
  });
});
