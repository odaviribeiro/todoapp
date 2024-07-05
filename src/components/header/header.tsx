import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { logo } from '@assets';
import { theme } from '@ui';

type HeaderProps = {
  task: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (task: string) => void;
  onPress: () => void;
};

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
  function isFocused() {
    if (inputRef.current?.isFocused() && task) return styles.border;
    return;
  }

  return (
    <View style={styles.container}>
      <Image source={logo} height={32} />
      <View style={styles.form}>
        <TextInput
          style={[styles.input, isFocused()]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.base.gray300}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />
        <Pressable style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={22}
            color={theme.colors.base.gray100}
          />
        </Pressable>
      </View>
    </View>
  );
}
