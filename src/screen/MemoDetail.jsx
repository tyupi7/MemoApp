import React from 'react';
import { View, ScrollView, Text, StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import AppBar from '../components/AppBar';
import CircleBottun from '../components/CircleBottun';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle}>買い物リスト</Text>
        <Text style={styles.MemoDate}>2020/7/24 18:00</Text>
      </View>
      <ScrollView style={styles.MemoBody}>
        <Text style={styles.MemoText}>
          買い物リスト
          書体やレイアウトを確認するために使います。
          本文用なので使い方を間違えると不自然に見えることがあります。
        </Text>
      </ScrollView>
      <CircleBottun style={{ top: 160, bottom: 'auto' }}>+</CircleBottun>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  MemoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  MemoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  MemoDate: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
  MemoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  MemoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
