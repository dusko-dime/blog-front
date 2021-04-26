import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  from,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://127.0.0.1:5000/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  console.log("AUTH MIDDLEWARE");
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: localStorage.getItem("token") || null,
    },
  }));

  return forward(operation);
});

const apiClient = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  // uri: "http://127.0.0.1:5000/graphql",
  cache: new InMemoryCache(),
});

export default apiClient;
