import { theme } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  created: {
    fontFamily: theme.font_family.bold,
    color: theme.colors.brand.blue,
    fontSize: theme.font_size.md,
  },
  completed: {
    fontFamily: theme.font_family.bold,
    color: theme.colors.brand.purple,
    fontSize: theme.font_size.md,
  },
  countCard: {
    backgroundColor: theme.colors.base.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50,
    minWidth: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: theme.colors.base.gray200,
  },
});
