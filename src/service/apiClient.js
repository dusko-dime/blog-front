import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  from,
} from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({ uri: "http://127.0.0.1:5000/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  console.log("AUTH MIDDLEWARE");
  if (localStorage.getItem("token"))
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Authorization: localStorage.getItem("token") || null,
      },
    }));

  return forward(operation);
});

// const logoutLink = onError(({ networkError }) => {
//   console.log("ERROR");
//   if (networkError.statusCode === 401) {
//     localStorage.removeItem("token");
//     window.open(window.location.origin);
//     console.log("WAS HERE");
//   }
// });

const apiClient = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  // uri: "http://127.0.0.1:5000/graphql",
  cache: new InMemoryCache(),
  onError: () => {},
});

export default apiClient;
