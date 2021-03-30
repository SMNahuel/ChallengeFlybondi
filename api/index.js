const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const travel = require('./dataset.json')
const {schema} = require('./data/schema.js');

const mapPost = (post, id) => post && ({ id, ...post });

const root = {
  travels: () => travel.map(mapPost),
  travel: ({ id }) => mapPost(travel[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);