import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../style';
import UserComponent from './component/UserComponent';

const UserListScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>All Users</Text>
      <UserComponent />
    </SafeAreaView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({});
