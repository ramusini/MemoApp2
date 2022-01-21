import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.constainer}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年</Text>
      </View>
      <View>
        <ScrollView style={styles.memoBody}>
          <Text style={styles.memoText}>
            買い物リスト
            書体やレイアウトなど。
            本文ようの文章にて仮に設定を要注意。
          </Text>
        </ScrollView>
      </View>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        /* 画面遷移がうまくいく？react-navigationよりApp.jsxのStack.Screenのところに自動的にnavigationが渡されているから。 */
        onPress={() => { navigation.navigate('MemoEdit'); }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    lineHeight: 16,
    fontSize: 12,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    lineHeight: 24,
    fontSize: 16,
  },
});
