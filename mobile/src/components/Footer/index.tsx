import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export const WidgetFooter: FunctionComponent = () => {
   return(
      <View style={styles.container}>
         <Text style={styles.text}>
            Feito com 🖤 por Raphael Capeto
         </Text>
      </View>
   );
};