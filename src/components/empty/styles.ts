import { theme } from '@ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 48,
    flexDirection: 'column',
  },
  stroke: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.base.gray400,
    marginTop: 21,
  },
  bold: {
    color: theme.colors.base.gray300,
    fontFamily: theme.font_family.bold,
    marginTop: 16,
  },
  thin: {
    color: theme.colors.base.gray300,
    fontFamily: theme.font_family.regular,
  },
  text: {
    alignItems: 'center',
    marginBottom: 48,
  },
});
