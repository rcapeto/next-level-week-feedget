import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import { WidgetFooter } from '../Footer';
import { WidgetOption } from '../Option';
import { FeedbackType, feedbackTypes } from '../../utils/feedbackTypes';

import styles from './styles';

export interface WidgetOptionsProps {
   onSelectFeedbackOption: (option: FeedbackType) => void;
};

export const WidgetOptions: FunctionComponent<WidgetOptionsProps> = ({ 
   onSelectFeedbackOption
}) => {
   return(
      <View style={styles.container}>
         <Text style={styles.title}>
            Deixe o seu feedback
         </Text>
         <View style={styles.options}>
            {
               Object.entries(feedbackTypes).map(([key, value]) => (
                  <WidgetOption 
                     key={key}
                     title={value.title}
                     image={{ source: value.image }}
                     onPress={() => onSelectFeedbackOption(key as FeedbackType)}
                  />
               ))
            }
         </View>
         <WidgetFooter />
      </View>
   );
};