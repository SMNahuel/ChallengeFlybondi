const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

module.exports ={ 
    schema : buildASTSchema(gql`
    type Travel {
        destination: String
        origin: String
        availability : Int
        price: Float
        data: String
    }
    type Query {
        searchTravel(origin: String!, date: String!, price: Float!): [Travel]
        searchOrigin: [String]
        searchReturn(origin: String!, date: String!, destination: String!): [Travel]
    },
`)
}

