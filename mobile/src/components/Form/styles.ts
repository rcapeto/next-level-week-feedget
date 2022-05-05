import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 24,
      alignItems: 'center'
   },
   header: {
      flexDirection: 'row',
      marginVertical: 16,
      alignItems: 'center',
   },
   titleContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 24
   },
   titleImage: {
      width: 24,
      height: 24,
      marginRight: 8
   },
   titleText: {
      fontSize: 20,
      color: theme.colors.text_primary,
      fontFamily: theme.fonts.medium
   },
   input: {
      height: 112,
      padding: 12,
      marginBottom: 8,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: theme.colors.stroke,
      color: theme.colors.text_primary,
      fontFamily: theme.fonts.regular,
      width: '100%'
   },
   buttonsContainer: {
      flexDirection: 'row',
      marginBottom: 16,
   },
   submitButton: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      borderRadius: 4,
      backgroundColor: theme.colors.brand,
   },
   submitButtonText: {
      fontSize: 14,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text_on_brand_color
   },
});

export default styles;