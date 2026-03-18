// graphql/client.ts
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// GraphQL API
const GRAPHQL_ENDPOINT = 'https://graphqlzero.almansi.me/api';

// Error Handling Link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: ${message} at ${locations} (path: ${path})`,
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

//HTTP Link (API endpoint)
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

//  Combine Links (ORDER MATTERS)
const link = ApolloLink.from([errorLink, httpLink]);

//  Apollo Client Setup
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network', // fast + updated
    },
    query: {
      fetchPolicy: 'network-only', // always fresh
    },
  },
});
