import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiClient = new ApolloClient({
  uri: "http://127.0.0.1:5000/graphql",
  cache: new InMemoryCache(),
});

export default apiClient;
