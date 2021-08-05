import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleBottun from '../components/CircleBottun';

export default function MemoListScreen(prop) {
  const { navigation } = prop;
  return (
    <View style={styles.container}>
      <MemoList />
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
