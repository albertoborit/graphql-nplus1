const knex = require("knex")( {
  client: 'mysql',
  connection: {
    host : 'mysqldb',
    port : 3306,
    user : 'root',
    password : '123456',
    database : 'mainDB'
  }
})

const resolvers = {
    Query: {
        users: async () => {
          return await knex("user")
          .select("*")
        },
      },
  };

  module.exports = resolvers