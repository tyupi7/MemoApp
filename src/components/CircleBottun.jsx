import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBottun(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleBottun, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleBottun.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleBottun.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleBottun: {
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
    elevation: 8,
  },
  circleBottunLabel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
