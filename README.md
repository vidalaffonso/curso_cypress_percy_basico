# curso-cypress-percy

Repositório do curso básico de testes de regressão visual com Cypress e Percy da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).

## Aula 1

Setup inicial

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Clone do projeto (git clone git@github.com:wlsf82/curso-cypress-percy.git)<br>
    - Inicialização de um projeto Node.js (npm init -y)<br>
    - Atuazação da licença (MIT), script de teste (percy exec -- cypress run), keywords (cypress, percy) e autor (nome, email e website)<br>
    - Instalação do Cypress e Percy (npm i cypress @percy/cypress -D)<br>
    - Inicialização do Cypress (npx cypress open) e sua estrutura de arquivos e diretórios<br>
    - Atualização do arquivo .gitignore (cypress/screenshots/ e cypress/videos/)<br>
    - Configurando o Percy para trabalhar em conjunto com o Cypress (https://docs.percy.io/docs/cypress)<br>
    - Documentação oficial do Cypress (https://docs.cypress.io/guides/overview/why-cypress.html)<br>
    - Documentação oficial do Percy (https://docs.percy.io/docs)
</details>

## Aula 2

[Percy.io](https://percy.io)

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Criando uma conta no percy.io<br>
    - Criação do projeto<br>
    - Exportação do project token
</details>

## Aula 3

Primeiro teste

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Conhecendo a aplicação em teste<br>
    - Criação do primeiro teste de regressão visual com Cypress e Percy<br>
    - Execuação do primeiro teste<br>
    - Aprovação da snapshot no dashboard do Percy
</details>

## Aula 4

Testando outras variações

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Criação do teste de preenchimento do formulário com um e-mail inválido<br>
    - Criação do teste de preenchimento de todos os campos obrigatórios do formulário<br>
    - Criação do teste de seleção de mais de um ticket VIP<br>
    - Execuação dos novos teste<br>
    - Aprovação das novas snapshots no dashboard do Percy
</details>

## Aula 5

Testes com conteúdos dinâmicos

<details>
  <summary>Conteúdo da aula</summary>
    <br>- O problema de conteúdos dinâmicos nos testes de regressão visual<br>
    - Criação do teste para submissão do formulário com sucesso<br>
    - Execução dos testes<br>
    - Aprovação da nova snapshot no dashboard do Percy<br>
    - Re-execução dos testes<br>
    - Falso negativo<br>
    - Lidando com elementos dinâmicos - https://docs.percy.io/docs/percy-specific-css<br>
    - Re-execução dos testes<br>
    - Aprovação da nova snapshot no dashboard do Percy<br>
    - Re-execução dos testes sem resultados falsos negativos
</details>

## Aula 6

Fechamento

<details>
  <summary>Conteúdo da aula</summary>
    <br>- Documentação do projeto (atualização do README.md)<br>
    - Resumo do curso (instalação, configuração, dashboard do Percy, execução dos testes, aprovação de snapshots, e econteúdos dinâmicos)<br>
    - Indo além (#ReadTheDocs)<br>
    - Novos cursos... em breve!
</details>

___

Um curso da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).


## Ultima aula

## Pré-requisitos

Para instalar as dependencias do projeto  e executar os testes automatizaos, é necessário que o 
Node.js e NPM estejam isntalado em seu computador

>As seguintes versões de ambos os sistemas foram utilizadas durante o desenvolvimento deste projeto ('14.17.6)

## Instalação 
Após clonar o proejto, acesse o diretório do mesmo e execute 'npm install' para instalar as dependencias de desenvolvimento

## Exprtando o token do projeto criado no Percy.io

Exporte como uma variável de ambiente o token do seu prohjeto (disponivel no _dashboard_do Percy).Veja os exemplos abaixo para sistema Windows e Unix 

# Windows
$ set PERCY_TOKEN=<your token here>

# Unix 
$ export PERCY_TOKEN=<your token here>
 >Fonte https://docs.percy.io/docs/cypress


## Executando os teste 

Execute o comando 'npm test' para executar os testes em modo headless