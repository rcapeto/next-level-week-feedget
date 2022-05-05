import React, { FunctionComponent, useState } from 'react';
import { 
   View, 
   Text,
   TextInput,
   Image,
   TouchableOpacity,
   ActivityIndicator,
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import * as FileSystem from 'expo-file-system'; //para transformar endereço de imagem em base64

import { ScreenshotButton } from '../Screenshot';
import { WidgetSuccess } from '../Success';

import { theme } from '../../theme';
import { FeedbackType, feedbackTypes } from '../../utils/feedbackTypes';
import { submitFeedback } from '../../services/routes';
import styles from './styles';

export interface WidgetFormProps {
   feedbackType: FeedbackType;
   onResetForm: () => void;
   formSuccess: boolean;
   onChangeFormSuccess: (formSuccess: boolean) => void;
};

export const WidgetForm: FunctionComponent<WidgetFormProps> = ({ 
   feedbackType, onResetForm, formSuccess, onChangeFormSuccess
}) => {
   const [screenshot, setScreenshot] = useState<string | null>(null);
   const [comment, setComment] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const feedbackInfo = feedbackTypes[feedbackType];

   const handleSubmitForm = async () => {
      if(isLoading) return;

      if(!comment || !comment.trim()) {
         return;
      }

      const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });
      const formatedScreenshot = `data:image/png;base64, ${screenshotBase64}`;

      const data = { 
         comment, 
         screenshot: screenshot ? formatedScreenshot : null, 
         type: feedbackType 
      };

      try {
         setIsLoading(true);
         await submitFeedback(data);
         onChangeFormSuccess(true);

      } catch(err) {
         console.error('Error submiting', (err as any).message);
      } finally {
         setIsLoading(false);
      }
   };

   if(formSuccess) return <WidgetSuccess onResetForm={onResetForm}/>

   return(
      <View style={styles.container}> 
         <View style={styles.header}>
            <TouchableOpacity onPress={onResetForm}>
               <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary}/>
            </TouchableOpacity>
               
            <View style={styles.titleContainer}>
               <Image source={feedbackInfo.image} style={styles.titleImage}/>
               <Text style={styles.titleText}>
                  {feedbackInfo.title}
               </Text>
            </View>
         </View>

         <TextInput 
            value={comment}
            onChangeText={setComment}
            multiline
            textAlignVertical="top"
            style={styles.input}
            autoCorrect={false}
            placeholderTextColor={theme.colors.text_secondary}
            placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acotencendo"
         />

         <View style={styles.buttonsContainer}>
            <ScreenshotButton 
               onTakeShot={setScreenshot}
               onRemoveShot={() => setScreenshot(null)}
               screenshot={screenshot}
            />
            
            <TouchableOpacity 
               style={styles.submitButton} 
               onPress={handleSubmitForm}
               disabled={comment.length === 0}
            >
               {
                  isLoading ? (
                     <ActivityIndicator size="small" color={theme.colors.text_primary}/>
                  ) : (
                     <Text style={styles.submitButtonText}>Enviar</Text>
                  )
               }
            </TouchableOpacity>
         </View>
      </View>
   );
};