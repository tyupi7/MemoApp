import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleBottun from '../components/CircleBottun';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(prop) {
  const { navigation } = prop;
  const [memos, setMemos] = useState([]); // 空の箱を定義して後で入れる,useStateで一時的にデータを管理する
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => { // useEffceでログインの状態を監視する
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.Alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe; // 画面を移動するときにリフレッシュを行うらしい
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleBottun
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
