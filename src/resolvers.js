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


function hydrate(data) {
  // return res = books.map((item) => {
  //   const related = books.find((el) => el.user_id == item.user_modules_id);
  //   return { ...item,  related };
  // });
  let auxArr = []
  let arr = []
  data.forEach(obj => {
    let appender = data.filter(objx=>objx.user_id === obj.user_modules_id)
    appender = appender.map(e=>{
      return {
        user_id:e.user_id,
        username:e.username,
        userType: e.userType
      }
    })
    console.log(appender)
    if(!auxArr.includes(obj.user_modules_id)){
      arr.push({
        id: obj.user_modules_id,
        name: obj.name,
        user_module:appender
      })
    }
    auxArr.push(obj.user_modules_id)
  })
  console.log(arr)
  return arr
}
const resolvers = {
    Query: {
        modules: async () => {
          const data =  hydrate(await knex.select('*').from('modules').innerJoin('user','user.user_id', '=', 'modules.user_modules_id'))
          return data
        },
      },
  };

  module.exports = resolvers