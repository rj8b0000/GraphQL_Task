import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <ActivityIndicator size={'large'} color={'#000d05'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
