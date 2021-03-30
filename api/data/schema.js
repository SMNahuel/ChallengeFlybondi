const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

module.exports ={ 
    schema : buildASTSchema(gql`
    type Query {
        travels: [Travel]
        travelByOrigin(origin: string!): [Travel]
    },
    type Travel {
        id: ID
        destination: String
        origin: String
        availability : Int
        price: Float
        data: String
    }
`)
}

