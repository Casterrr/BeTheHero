/**
 * Rotas / Recurso
 * 
 * Rotas: Todo o endereço da aplicação.
 * Recurso: Tudo que vem depois da "/".
 */


/*
* Métodos HTTP
GET: Busca/listar uma informação no back-end.
POST: Criear uma informação no back-end.
PUT: Alterar uma informação no back-end.
DELETE: Deletar uma informação no back-end.

*/

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após p "?" (Filtros, Paginação).
 *      Exp: https://localhost/3333/users?nome=Lucas&page=2     (Onde "?" indica que vc vai filtrar e "&" junta mais de um filtro).
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc.
  */

/**
 * Drive: SELECT * FROM users
 * Query Builder: table('users').select('*').where('');
 */
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;