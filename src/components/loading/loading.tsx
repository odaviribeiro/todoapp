import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { theme } from '@ui';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={theme.colors.brand.blue} />
    </View>
  );
}
