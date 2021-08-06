import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import firebase from 'firebase';

import CircleBottun from '../components/CircleBottun';
import KeyboardSafeView from '../components/KeyboardAView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText, // キーと値が同じ場合は省略して一つにかける 本来はbody: body,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleBottun
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 27,
    paddingHorizontal: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
