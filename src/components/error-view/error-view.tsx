import React from 'react';
import {ErrorViewProps} from './error-view.props';
import {Button, View} from 'react-native';
import {styles} from './error-view.styles';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {Text} from '../text/text';
import {colors} from '../../utills/constants';

export const ErrorView = ({
  message,
  subMessage,
  icon,
  onRetry,
}: ErrorViewProps) => {
  return (
    <View style={styles.container}>
      <HugeiconsIcon icon={icon} size={100} color="white" strokeWidth={1.5} />
      <Text>{message}</Text>
      <Text>{subMessage}</Text>
      <View style={styles.retryButton}>
        <Button
          title="Retry"
          onPress={onRetry}
          color={colors.highlightPrimary}
        />
      </View>
    </View>
  );
};
