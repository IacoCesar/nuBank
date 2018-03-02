import React from 'react'
import App from './src/App';
import ApolloClient from 'apollo-client';
import { AppRegistry } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from "apollo-link-context";
import { API_URL, API_AUTH } from './src/lib/env'
import { Provider } from 'react-redux'

const httpLink = new HttpLink({
  uri: `${API_URL}`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `${API_AUTH}`
    }
  }
})

const Client = () => {
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

AppRegistry.registerComponent('nuAccount', () => Client);
