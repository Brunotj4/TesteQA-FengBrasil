
Respostas – (questões 1 a 8)

1) Escreva um teste automatizado em Cypress que faça um cadastro com sucesso que use um telefone com DDI brasileiro: 


Resposta: https://github.com/Brunotj4/TesteQA-FengBrasil/blob/master/cypress/e2e/Q1_Cadastro.cy.js


2) Utilizando os dados do cadastro feito na questão 1, escreva um teste automatizado em Cypress que faça login com sucesso:

Resposta: https://github.com/Brunotj4/TesteQA-FengBrasil/blob/master/cypress/e2e/Q2_Login.cy.js


3) Com base nas regras de campos de cadastro, escreva no mínimo 3 valores que seriam inválidos no campo Documento


1 - 123 – Muito curto, apenas 3 caracteres.

2 - 1234567890123 – Excede o limite de 12 caracteres.

3 - 12A45B – Contém letras, o que não é permitido.


4) Com base nas regras de campos de cadastro, escreva no mínimo 3 valores que seriam inválidos no campo Nome completo


1 - Br – Muito curto, só 2 letras.

2 - @!#% – Caracteres especiais que não formam um nome.

3 - "a".repeat(200) – Excede bastante o limite permitido que são 150 caracteres.


5) Com base nas regras de campos de cadastro, escreva no mínimo 3 valores que seriam inválidos no campo E-mail


1 - emailsemarroba.com – Falta o @.

2 - bruno@ –  sem domínio.

3 - BrunoTropiano@dominio@Feng.com – Possui dois @, não é válido.


6) Com base nas regras de campos de cadastro, escreva no mínimo 3 valores que seriam inválidos no campo Data de nascimento


1 - 31-12-1998 – usa hífens em vez de barras.

2 - 35/13/2300 – Data inexistente.

3 - 12/05/2015 – Pessoa menor de idade.


7) Com base nas regras de campos de cadastro, escreva no mínimo 3 valores que seriam inválidos no campo Telefone


1 - 32321abc68 – Contém letras.

2 - 3291039219011 –  ultrapassa o limite da quantidade digitos permitidos.

3 - 92932-2192 – Contém traço, que não é permitido.


8) Com base nas regras de campos de cadastro, escreva no mínimo 3 valores que seriam inválidos no campo Senha


1 - 1234567 – Muito curta e só tem números.

2 - senhaSegura – Não tem número nem caractere especial.

3 - 12345678! – Falta letras maiúsculas e minúsculas.
