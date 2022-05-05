import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

const styles = StyleSheet.create({
  container: {
     alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },
  options: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default styles;