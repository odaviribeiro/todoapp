import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { clipboard } from '@assets';

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.stroke} />
      <View style={styles.text}>
        <Image source={clipboard} width={56} height={56} />
        <Text style={styles.bold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.thin}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
