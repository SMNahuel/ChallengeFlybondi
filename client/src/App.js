import './App.css';
import Home from './components/Home/Home.js';

/* Apollo */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from 'react';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const httpLink ={
  uri: "http://localhost:4000/graphql"
}
/* const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(httpLink)
});

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
