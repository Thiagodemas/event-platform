import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u1ev8u0g3m01uh00pc22z3/master',
  cache: new InMemoryCache()
});