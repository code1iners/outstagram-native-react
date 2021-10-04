import { ApolloClient, InMemoryCache } from "@apollo/client";

import { API_SERVER_URI } from "@env";

const client = new ApolloClient({
  uri: API_SERVER_URI,
  cache: new InMemoryCache(),
});

export default client;
