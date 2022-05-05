import React, { FunctionComponent, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { WidgetOptions } from '../Options';
import { WidgetForm } from '../Form';
import { FeedbackType } from '../../utils/feedbackTypes';

import styles from './styles';

const Widget: FunctionComponent = () => {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
   const [formSuccess, setFormSuccess] = useState(false);

   const bottomSheetRef = useRef<BottomSheet>(null);

   const handleOpen = () => {
      bottomSheetRef.current?.expand();
   };

   const handleSelectFeedbackOption = (option: FeedbackType) => {
      setFeedbackType(option);
   };

   const handleRequestResetWidget = () => {
      setFeedbackType(null);
      setFormSuccess(false);
   };

   return(
      <>
         <TouchableOpacity style={styles.button} onPress={handleOpen}>
            <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} weight="bold"/>
         </TouchableOpacity>

         <BottomSheet 
            ref={bottomSheetRef}
            snapPoints={[0.1, 280]}
            backgroundStyle={styles.modal}
            handleIndicatorStyle={styles.indicator}
         >
            {
               feedbackType ? (
                  <WidgetForm 
                     feedbackType={feedbackType}
                     onResetForm={handleRequestResetWidget}
                     formSuccess={formSuccess}
                     onChangeFormSuccess={setFormSuccess}
                  />
               ) : (
                  <WidgetOptions 
                     onSelectFeedbackOption={handleSelectFeedbackOption}
                  />
               )
            }

         </BottomSheet>
      </>
   );
};

export default gestureHandlerRootHOC(Widget);