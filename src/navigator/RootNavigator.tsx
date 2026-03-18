import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserListScreen from '../screens/Users/UserListScreen';
import PostListScreen from '../screens/Posts/PostListScreen';
import AddPostScreen from '../screens/Posts/AddPostScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Users" component={UserListScreen} />
        <Stack.Screen name="Posts" component={PostListScreen} />
        <Stack.Screen name="AddPost" component={AddPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
