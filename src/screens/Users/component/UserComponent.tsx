import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigator/types';
import { Users } from '../../../types';

interface UserComponentProp {
  item: Users;
}
const UserComponent: React.FC<UserComponentProp> = ({ item }) => {
  type UserScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Posts'
  >;
  const navigation = useNavigation<UserScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Posts', { id: item.id })}
    >
      <Text style={styles.text}>Id - {item.id}</Text>
      <Text style={styles.text}>Name - {item.name}</Text>
      <Text style={styles.text}>Email - {item.email}</Text>
    </TouchableOpacity>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    marginVertical: '3%',
    padding: '4%',
    borderRadius: 16,
    backgroundColor: '#f1f1f1',
  },
  text: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
});
