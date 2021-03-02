import { onError } from 'apollo-link-error';
onError(({ graphQLErrors, networkError, operation, forward }) => {
  console.log(operation)
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
  return forward(operation)
});
