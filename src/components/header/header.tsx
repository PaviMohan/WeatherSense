import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './header.style';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Sense</Text>
    </View>
  );
};
