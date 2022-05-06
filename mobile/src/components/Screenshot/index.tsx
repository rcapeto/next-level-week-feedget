import { Camera, Trash } from 'phosphor-react-native';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import { theme } from '../../theme';
import styles from './styles';

export interface ScreenshotButtonProps {
   screenshot: string | null;
   onTakeShot: (screenshot: string) => void;
   onRemoveShot: () => void;
};

export const ScreenshotButton: FunctionComponent<ScreenshotButtonProps> = ({
   screenshot, onRemoveShot, onTakeShot
}) => {
   const handleTakeScreenshot = async () => {
      try {
         const image = await captureScreen({ format: 'png', quality: .8 });
         onTakeShot(image);
      } catch(err) {
         console.error('Error screenshot', (err as any).message);
      }
   };

   return(
      <TouchableOpacity
         onPress={screenshot ? onRemoveShot : handleTakeScreenshot}
         style={styles.container}
      >
         {
            screenshot ? (
               <View> 
                  <Image 
                     source={{ uri: screenshot }}
                     style={styles.image}
                  />
                  <Trash 
                     size={22}
                     color={theme.colors.text_secondary}
                     weight="fill"
                     style={styles.removeIcon}
                  />
               </View>
               
            ) : (
               <Camera 
                  size={24}
                  color={theme.colors.text_primary}
                  weight="bold"
               />
            )
         }

      </TouchableOpacity>
   );
};