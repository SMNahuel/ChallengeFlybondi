import './App.css';
import Home from './components/Home/Home.js';

/* Apollo */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import React from 'react';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
function App() {
  return (
    <React.StrictMode>
    <ApolloProvider client={client}>
      {" "}
      {/* <GetUsers /> */}
      <Home />
    </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
