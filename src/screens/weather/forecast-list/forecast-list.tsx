import React, {useCallback} from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';
import {ForecastListItem} from './forecast-list-item/forecast-list-item';
import {styles} from './forecast-list.style';
import {Text} from '../../../components';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {ArrowRight01Icon} from '@hugeicons/core-free-icons';
import {setSelectedDay} from '../../../redux/weather/weatherActions';
import {useAppDispatch, useAppSelector} from '../../../redux/store';

export const ForecastList = () => {
  const flatListRef = React.useRef<FlatList>(null);

  const {weatherData, selectedDay} = useAppSelector(state => state.weather);
  const dispatch = useAppDispatch();

  const handleItemPress = useCallback(
    (id: number, index: number) => {
      dispatch(setSelectedDay(id));
      flatListRef.current?.scrollToIndex({index: index, animated: true});
    },
    [dispatch],
  );

  const handleScrollToIndexFailed = useCallback(
    (info: {
      index: number;
      highestMeasuredFrameIndex: number;
      averageItemLength: number;
    }) => {
      const wait = new Promise(resolve => setTimeout(resolve, 500));
      wait.then(() => {
        flatListRef.current?.scrollToIndex({
          index: info.index,
          animated: true,
        });
      });
    },
    [],
  );

  const renderItem: ListRenderItem<any> = useCallback(
    ({item, index}) => {
      const {id, dateShort, temperature, weatherIcon} = item;
      return (
        <ForecastListItem
          index={index}
          id={id}
          day={dateShort}
          temperature={temperature}
          weatherIcon={weatherIcon}
          onItemPress={handleItemPress}
          isSelected={id === selectedDay}
        />
      );
    },
    [handleItemPress, selectedDay],
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text overrideStyles={styles.headerTextStyle}>Forecast</Text>
        <View style={styles.headerRightContainer}>
          <Text>5 Days</Text>

          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            color="white"
            strokeWidth={3}
          />
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        contentContainerStyle={styles.listContentContainer}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={handleScrollToIndexFailed}
      />
    </View>
  );
};
