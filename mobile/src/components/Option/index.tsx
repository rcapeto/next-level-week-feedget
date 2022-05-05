import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, Image, ImageProps } from 'react-native';

import styles from './styles';

export interface WidgetOptionProps extends TouchableOpacityProps {
   title: string;
   image: ImageProps;
};

export const WidgetOption: FunctionComponent<WidgetOptionProps> = ({
   title,
   image,
   ...props
}) => {
   return(
      <TouchableOpacity style={styles.container} {...props}>
         <Image source={image.source} style={styles.image}/>
         <Text style={styles.title}>
            {title}
         </Text>
      </TouchableOpacity>
   );
};