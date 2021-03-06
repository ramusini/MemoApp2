import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    /* emailとpasswordを渡す */
    firebase.auth().createUserWithEmailAndPassword(email, password)
      /* 会員登録が成功した時（.then） */
      /* コールバック関数userCredentialがユーザー情報を受け取る */
      .then(() => {
        /* submitボタンを押した時にテキストボックスを空にし、MemoListページに飛ぶ */
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      /* 会員登録に失敗した場合（.catch）。これはerrorを受け取れる */
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }

  return (
    <View style={StyleSheet.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          /* onChangeはユーザーが文字を入力する度に発動する */
          /* 引数の(text)はユーザーの入力内容を受けて、setEmailに渡す。emailが更新される */
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Submit"
          /* eslint-disable-next-line */
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already resisterd?</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'LogIn' }],
            });
          }}
          >
            <Text style={styles.footerLink}>Log in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    lineHeight: 24,
    fontSize: 14,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
