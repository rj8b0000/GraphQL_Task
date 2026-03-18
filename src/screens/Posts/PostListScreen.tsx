import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../style';
import PostComponent from './component/PostComponent';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/types';

const PostListScreen = () => {
  type PostListScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    'AddPost'
  >;
  const navigation = useNavigation<PostListScreenProp>();
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={GlobalStyles.title}>All Posts</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddPost')}>
          <Text style={styles.title}>+ Add Post </Text>
        </TouchableOpacity>
      </View>

      <PostComponent />
    </SafeAreaView>
  );
};

export default PostListScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
});
