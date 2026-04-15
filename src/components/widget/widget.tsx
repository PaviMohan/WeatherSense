import React from 'react';
import {View} from 'react-native';
import {Text} from '../text/text';
import {styles} from './widget.style';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {WidgetProps} from './widget.props';
import {colors} from '../../utils/constants';

export const Widget = ({icon, title, value}: WidgetProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <HugeiconsIcon
          icon={icon}
          size={24}
          color={colors.light}
          strokeWidth={1}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text overrideStyles={styles.valueTextStyle}>{value}</Text>
        <Text>{title}</Text>
      </View>
    </View>
  );
};
