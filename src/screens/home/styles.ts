import { theme } from '@ui';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  title: {
    marginTop: 48,
    color: '#FBFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.font_family.bold,
  },
});
