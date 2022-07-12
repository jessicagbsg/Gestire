# DesafioGrupoEuax-JessicaGondim
 
 Projeto desenvolvido para o desafio do Grupo Euax - estágio em desenvolvimento
 
 
## Projeto Gestire

O Gestire foi desenvolido para controle e gerenciamento de projetos e atividades. Nele o cliente tem a possibilidade de cadastrar seus projetos e dentro de cada projeto, cadastrar suas respectivas atividades. O dashborad ilustra o progresso em forma de gráfico, representando os projetos atrasados, finalizados e em desenvolvimento, além de nomear os projetos e atividades em atraso nos respectivos cards. Quando uma nova atividade ou projeto são inseridos, o dashboard é atualizado.

# Layout do Projeto
O [protótipo do projeto](https://www.figma.com/file/7Xx0mGhcZGmmbgOitkzjpE/Desafio-Grupo-Euax-%7C-Gestire?node-id=0%3A1) foi desenvolvido no ``figma``, pensando na experiência do usuário, com cores suaves e destintas para setorização. 

Alguns diagramas foram desenvolvidos no pré-desenvolvimento:
  * [Link para etapas pré-desenvolvimento](https://pdf.ac/Hu8LA)
 

## Layout
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/98706386/178494483-fcd58035-6448-4c10-a5d7-7113a07c0d2f.gif)


# Ferramentas Utilizadas

### Front-End

* ``React`` no desenvolvimento front end, para criação de ``SPA``; ``Hooks``, ``Routes``.
* ``TypeScript`` para tipagem do React.
* ``Styled Components`` para estilização com ``CSS in JS``.
* ``Victory library`` para geraçaõ e renderização dos graficos.

### Back-end
* ``NodeJS`` como ambiente de desenvolvimento.
* ``TypeScript`` para tipagem do NodeJs.
* ``Postman`` para criação de ``API padrão RESTful``.
* ``PostgreSQL`` no banco de dados.
* ``pgAdmin`` como IDE para o DB.
* ``Prisma`` como ORM para o BD.


### Ferramentas gerais
* ``Git`` para versionamento de código.
* ``ESLint`` para achar e consertar problemas de padrões.
* ``Yarn`` como gerenciador de pacotes.


# Instruções

## Utilizando o Projeto

Ao acessar o Gestire, o usuário é direcionado para o Dashboard onde ele poderá analisar o progresso dos projetos e atividades ja cadastrados. No primeiro acesso, o Dashboard estrá vazio e ao clicar no botão `New Project` o usuário é redicerionado para a página de `Projects List` onde ele encontra todos os projetos existentes ou cadastra um novo projeto ao clicar no botão `New Project`. Para cadastrar um projeto, o usuário deve preencher todos os campos do modal de cadastro. Quando o usuário já possui projetos cadastrados, ele terá acesso as atividades do projeto clicando no link `Go to Project Activities`. Ao acessar a lista de atividades do projeto, o usuário poderá cadastrar novas atividades clicando o botão `New Activity` e preenchendo todos os campos do modal de cadastro. Após o cadastro de projetos e atividades, o `Dashboard` passará a ilustrar os gráficos de progresso dos projetos e atividades, além de nomear os projetos e atividades em atraso. 


## Como Rodar o Projeto

Para rodar o projeto deve-se baixar os arquivos desse repositório, ou clonar o mesmo e abrir com a `IDE` de preferência.

No back-end deve estar rodando na porta 3005, por tanto, o arquivo server.ts deve ser alterado para tal. O arquivo da API do Front-end também deve ser verificado.

```
cd backend
yarn
ajustar as variaveis no .env
yarn start
cd ..
cd frontend
yarn
yarn start
```


# Author
LinkedIn:
https://www.linkedin.com/in/jessicagondim/

E-mail:
jessicagbsg@gmail.com
