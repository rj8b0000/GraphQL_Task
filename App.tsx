import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootNavigator from './src/navigator/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './src/graphql/client';

const App = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
