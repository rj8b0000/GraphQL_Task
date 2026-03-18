import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigator/types';

const UserComponent = () => {
  type UserScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Posts'
  >;
  const navigation = useNavigation<UserScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Posts')}
    >
      <Text style={styles.text}>Id - 1</Text>
      <Text style={styles.text}>Name - Rudraksh</Text>
      <Text style={styles.text}>Email - janirudraksh228@gmail.com</Text>
    </TouchableOpacity>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    marginVertical: '5%',
    padding: '4%',
    borderRadius: 16,
    backgroundColor: '#f1f1f1',
  },
  text: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
});
