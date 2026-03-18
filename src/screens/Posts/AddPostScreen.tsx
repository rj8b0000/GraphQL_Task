import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../style';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const AddPostScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalStyles.title}>Create Posts on Id : 2</Text>
      </View>
      <View style={{ marginVertical: '8%' }}>
        <TextInput
          placeholder="Enter Post Title"
          style={styles.txtInputStyle}
        />
        <TextInput
          placeholder="Enter Post Body"
          style={{ ...styles.txtInputStyle, minHeight: 70 }}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.addPostText}>Add Post</Text>
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
