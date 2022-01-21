import { string } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CircleButton(props) {
  const { children } = props;
  return (
    <View style={styles.cercleButton}>
      <Text style={styles.cercleButtonLabel}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  cercleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    /* android専用 エレメントの重なり順を決めている */
    elevation: 8,
  },
  cercleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
