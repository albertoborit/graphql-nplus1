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

// function hydrate(users) {
//   let hidrated = []
//   users.forEach(e => {
//     if(!hidrated.includes(e.user_id)){
//       hidrated.push(
//         {
//           "user_id":e.user_id,
//           modules : {
//             "id":e.id,
//             "name":e.name
//           }
//         }
//       )
//     }
//   });
//   return [{ user_id: 1, modules: { id: 1, name: 'm1' } }]
// }


function hydrate(books) {
  return books.map(x => ({
    ...x,
    user_module: {
      user_id: x.user_id,
      username: x.username,
      userType: x.userType
    }
  }));
}
const resolvers = {
    Query: {
        modules: async () => {
          const data =  hydrate(await knex.select('*').from('modules').leftJoin('user','user.user_id', '=', 'modules.user_modules_id'))
          return data
        },
      },
  };

  module.exports = resolvers