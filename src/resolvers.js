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

function hydrate(data) {
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
    if(!auxArr.includes(obj.user_modules_id)){
      arr.push({
        id: obj.user_modules_id,
        name: obj.name,
        user_module:appender
      })
    }
    auxArr.push(obj.user_modules_id)
  })
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