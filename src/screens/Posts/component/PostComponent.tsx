import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Posts } from '../../../types';

interface PostComponentProp {
  item: Posts;
}
const PostComponent: React.FC<PostComponentProp> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    marginVertical: '3%',
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
