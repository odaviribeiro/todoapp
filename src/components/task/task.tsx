import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '@ui';

export type TaskProps = {
  title: string;
  isCompleted?: boolean;
  onRemove: () => void;
  onDone: () => void;
};

export function Task({ title, isCompleted, onDone, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onDone} style={styles.pressable}>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? 'checkbox-marked-circle-outline'
              : 'checkbox-blank-circle-outline'
          }
          size={22}
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {title}
        </Text>
      </View>
      <Pressable onPress={onRemove} style={styles.pressable}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.base.gray300}
        />
      </Pressable>
    </View>
  );
}
