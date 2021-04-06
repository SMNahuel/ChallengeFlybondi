const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

module.exports ={ 
    schema : buildASTSchema(gql`
    type Travel {
        id: ID
        destination: String
        origin: String
        availability : Int
        price: Float
        data: String
    }
    type Query {
        searchTravel(origen: String!, date: String!, price: Float!): [Travel]
        searchOrigin: [String]
    },
`)
}

