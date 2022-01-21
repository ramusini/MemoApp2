import React from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={StyleSheet.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="PassWord" />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already resisterd?</Text>
          <Text style={styles.footerLink}>Log in.</Text>
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