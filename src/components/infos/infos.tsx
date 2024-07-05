import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type InfosProps = {
  created: number;
  completed: number;
};

export function Infos({ completed, created }: InfosProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.countCard}>
          <Text style={styles.count}>{created}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.completed}>Concluídas</Text>
        <View style={styles.countCard}>
          <Text style={styles.count}>{completed}</Text>
        </View>
      </View>
    </View>
  );
}
