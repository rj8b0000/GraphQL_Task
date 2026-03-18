import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../style';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/types';
import { useMutation } from '@apollo/client/react';
import { CREATE_POST } from '../../graphql/post/mutations';

type Props = NativeStackScreenProps<RootStackParamList, 'AddPost'>;
const AddPostScreen = ({ route }: Props) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  const [createPost, { loading }] = useMutation(CREATE_POST);

  const handleSubmit = () => {
    if (!title || !body) {
      Alert.alert('Error', 'Please enter both title and body');
      return;
    }

    createPost({
      variables: {
        input: {
          title,
          body,
        },
      },
    })
      .then(response => {
        Alert.alert(
          'Success',
          'Post created with ID: ' + response.data.createPost.id,
        );
        navigation.goBack();
        setTitle('');
        setBody('');
      })
      .catch(err => {
        Alert.alert('Error', err.message);
      });
  };
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalStyles.title}>Create Posts </Text>
      </View>
      <View style={{ marginVertical: '8%' }}>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Enter Post Title"
          style={styles.txtInputStyle}
        />
        <TextInput
          value={body}
          onChangeText={text => setBody(text)}
          placeholder="Enter Post Body"
          style={{ ...styles.txtInputStyle, minHeight: 70 }}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.addPostText}>
          {loading ? 'Submitting...' : 'Add Post'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtInputStyle: {
    borderWidth: 0.2,
    padding: '4%',
    borderRadius: 10,
    fontSize: 16,
    marginBottom: '5%',
  },
  addPostText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#000',
    padding: '2%',
    textAlign: 'center',
    borderRadius: 12,
  },
});
