import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../style';
import UserComponent from './component/UserComponent';
import { useQuery } from '@apollo/client/react';
import { GET_ALL_USERS } from '../../graphql/user/queries';
import Loader from '../../globalComponents/Loader';
import { GetUserResponse } from '../../types';

const UserListScreen = () => {
  const { loading, error, data } = useQuery<GetUserResponse>(GET_ALL_USERS);

  if (loading) return <Loader />;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>All Users</Text>
      <View style={{ height: '2%' }} />
      <FlatList
        data={data?.users.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <UserComponent item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({});
