import React, {useMemo} from 'react';
import {Text as RNText} from 'react-native';
import {styles} from './text.style';
import {TextProps} from './text.props';

export const Text = ({
  children,
  overrideStyles = {},
  overrideProps = {},
}: TextProps) => {
  const style = useMemo(() => {
    return [styles.basicTextStyle, overrideStyles];
  }, [overrideStyles]);
  return (
    <RNText style={style} {...overrideProps}>
      {children}
    </RNText>
  );
};
