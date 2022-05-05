import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import successImage from '../../assets/success.png';

import { WidgetFooter } from '../Footer';

import styles from './styles';

export interface WidgetSuccessProps {
   onResetForm: () => void;
};

export const WidgetSuccess: FunctionComponent<WidgetSuccessProps> = ({ onResetForm }) => {
   return(
      <View style={styles.container}>
         <View style={styles.content}>
            <Image 
               style={styles.image}
               source={successImage}
            />
            <Text style={styles.title}>
               Agradecemos o feedback!
            </Text>

            <TouchableOpacity style={styles.button} onPress={onResetForm}>
               <Text style={styles.buttonText}>Quero enviar outro</Text>
            </TouchableOpacity>
         </View>
         <WidgetFooter />
      </View>
   );
};