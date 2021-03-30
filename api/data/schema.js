const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

const schema = buildASTSchema(gql`
    type Query {
        travels: [Travel]
        travel(id: ID!): Travel
        origin : Travel
    },
    type Travel {
        id: ID
        destination: String
        origin: String
        availability : Int
        price: Float
        data: String
    }
`);


