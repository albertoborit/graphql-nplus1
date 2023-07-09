const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        users: [User]
    }

    type User {
        id: ID!
        username: String!
        userType: String
        active: String
        loginTries: Int
    }
`

module.exports=typeDefs
