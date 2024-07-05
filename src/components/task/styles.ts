import { theme } from '@ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.base.gray500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.base.gray400,
    marginHorizontal: 24,
  },
  textContainer: {
    flexGrow: 1,
    maxWidth: '75%',
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  textDone: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300,
    textDecorationLine: 'line-through',
  },
  textCreated: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray100,
    textDecorationLine: 'none',
  },
  pressable: {
    padding: 8,
  },
});
