# application-node.js


Banco de dados relacional com SQL , utilizando o Knex.js como query builder, criando migrations das tabelas. Node.js para rodar o javascript fora do navegador e criar um servidor local, usando os comandos npm e npx, instalando e executando as funcionalidades do Express. Utilizei o Beekeeper como SBGD(Sistema de Gerenciamento de Banco de Dados).

Me aprofundei bastante no banco de dados relacional, estudando a importância da chave primaria, que é o identificador único de um registro na tabela. Chave estrangeira, que diz respeita  a um relacionamento entre tabelas. Abordei os estudos de inner join( junção interna), que basicamente, uni as tabelas do banco de dados, junto a cardinalidade, fazendo um usuário ter varias notas, e uma nota ter apenas um usuário.

No javascript eu fiz a criptografia no password dos usuários, também criei middleware, para tratamento de exceções e capturar os erros na aplicação.

Através do Insomnia eu realizei testes de API Clients, com métodos de requisição http. Como por exemplo o Get, POST, PUT e o DELETE. Dando funcionalidades para eles no javascript.


Obs: "Nessa aplicação, o usuário faz o registro dele com nome, email e senha. Em seguida ele faz a nota sobre o filme, colocando o titulo do filme, descrição e a avaliação dele. Nas tags ele apenas coloca a categoria do filme. Lembrando que os ID são autoincrement, ou seja , elas são geradas automaticamente a cada registro."




![Captura de Tela (24)](https://user-images.githubusercontent.com/108099380/212504525-343c7014-bc6a-499a-a12a-3d63f5e86bab.png)
