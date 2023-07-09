const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        modules: [Modules]
    }

    type User {
        user_id: ID!
        username: String!
        userType: String
        active: String
        loginTries: Int
    }

    type Modules {
        id: ID!
        name: String
        user_module: [User]
    }
`

module.exports=typeDefs
