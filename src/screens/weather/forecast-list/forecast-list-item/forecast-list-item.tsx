import React, {useCallback, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Sun} from '@hugeicons/core-free-icons';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {styles} from './forecast-list-item.style';
import {Text} from '../../../../components';
import {ForecastListItemProps} from './forecast-list-item.props';

export const ForecastListItem = ({
  index,
  id,
  day = 'Today',
  temperature = '34',
  weatherIcon = Sun,
  isSelected = false,
  onItemPress,
}: ForecastListItemProps) => {
  const containerStyles = useMemo(() => {
    return [styles.container, isSelected && styles.selectedContainer];
  }, [isSelected]);

  const handlePress = useCallback(() => {
    onItemPress(id, index);
  }, [id, index, onItemPress]);
  const textOverrideStyles = useMemo(() => {
    return isSelected ? styles.selectedTextStyle : {};
  }, [isSelected]);

  const strokeWidth = useMemo(() => (isSelected ? 2 : 1), [isSelected]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={containerStyles}
      onPress={handlePress}>
      <Text overrideStyles={textOverrideStyles}>{temperature}</Text>
      <HugeiconsIcon
        icon={weatherIcon}
        size={32}
        color="white"
        strokeWidth={strokeWidth}
      />
      <Text overrideStyles={textOverrideStyles}>{day}</Text>
    </TouchableOpacity>
  );
};
