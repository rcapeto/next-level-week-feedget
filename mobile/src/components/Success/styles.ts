import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

const styles = StyleSheet.create({
   container: {
      height: '100%',
      paddingVertical: 28,
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   content: {
      alignItems: 'center',
   },
   image: {
      width: 46,
      height: 46,
      marginBottom: 10
   },
   title: {
      fontSize: 20,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text_primary
   },
   button: {
      height: 40,
      backgroundColor: theme.colors.surface_secondary,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      marginTop: 30
   },
   buttonText: {
      fontSize: 12,
      color: theme.colors.text_primary,
      fontFamily: theme.fonts.medium,
   },
});

export default styles;