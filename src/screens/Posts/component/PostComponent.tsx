import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PostComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>Post Title</Text>
      <Text style={styles.postBody}>
        Loremdfd dsgdfg ddfg ddfgdfghfd dfgfgh dfrter.....
      </Text>
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    marginVertical: '5%',
    padding: '4%',
    borderRadius: 16,
    backgroundColor: '#f1f1f1',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 32,
  },
  postBody: {
    fontSize: 16,
    fontFamily: '400',
    lineHeight: 24,
  },
});
