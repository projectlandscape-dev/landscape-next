import { ApolloClient, HttpLink, InMemoryCache, ApolloLink} from "@apollo/client";

// import { removeLastTrailingSlash } from "lib/util";
let client;

const consoleLink = new ApolloLink((operation, forward) => {
  console.log(`Starting request for ${operation.operationName}`);
  return forward(operation).map((response) => {
    console.log(`Ending request for ${operation.operationName}`);
    console.log(response);
    return response;
  });
});

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
     link: ApolloLink.from([
      consoleLink,
    new HttpLink({
      uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
        }),
    ]),

    

      // Old code
// export function _createApolloClient() {
  // return new ApolloClient({
  //   link: new HttpLink({
  //     uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,

      //       uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
   
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  });
}
