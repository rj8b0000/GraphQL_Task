import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../style';
import PostComponent from './component/PostComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/types';
import { useQuery } from '@apollo/client/react';
import { GET_POST_ON_USER_ID } from '../../graphql/post/queries';
import Loader from '../../globalComponents/Loader';
import { GetPostsResponse } from '../../types';
import { useState } from 'react';

type PostListScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddPost'
>;
type Props = NativeStackScreenProps<RootStackParamList, 'Posts'>;
const PostListScreen = ({ route }: Props) => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);
  const navigation = useNavigation<PostListScreenProp>();
  const { id } = route.params;
  const { data, loading, error, fetchMore } = useQuery<GetPostsResponse>(
    GET_POST_ON_USER_ID,
    {
      variables: { page: 1, limit: 20, id: id },
      notifyOnNetworkStatusChange: true,
      onCompleted: data => {
        setPosts(data?.user?.posts?.data);
      },
    },
  );
  const loadMorePosts = () => {
    fetchMore({
      variables: { page: page + 1, limit: 10 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const combinedPosts = [
          ...prev.user.posts.data,
          ...fetchMoreResult.user.posts.data,
        ];

        return {
          ...prev,
          user: {
            ...prev.user,
            posts: {
              ...prev.user.posts,
              data: combinedPosts,
            },
          },
        };
      },
    });
  };
  if (loading) return <Loader />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalStyles.title}>All Posts</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddPost', { id })}
        >
          <Text style={styles.title}>+ Add Post </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: '2%' }} />
      <FlatList
        data={data?.user?.posts?.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PostComponent item={item} />}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Load More" onPress={loadMorePosts} disabled={loading} />
    </SafeAreaView>
  );
};

export default PostListScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  titleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});
