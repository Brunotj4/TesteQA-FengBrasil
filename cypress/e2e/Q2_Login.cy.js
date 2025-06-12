describe('Fluxo de Login', () => {
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
  });
});
