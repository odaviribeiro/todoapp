import { theme } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 173,
    backgroundColor: theme.colors.base.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    marginBottom: 55,
    paddingHorizontal: 24,
  },
  input: {
    height: 54,
    flexGrow: 1,
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 5,
    padding: 16,
    color: theme.colors.base.gray100,
    marginRight: 4,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.regular,
    borderColor: theme.colors.base.gray700,
    borderWidth: 1,
  },
  border: {
    borderColor: theme.colors.brand.purple,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  form: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -54 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
