import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <Fragment>
      <StatusBar style="light" translucent />
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    </Fragment>
  );
}
