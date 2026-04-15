import React, {useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {styles} from './forecast-item-detail-view.style';
import {Widget} from '../../../components';
import {CloudAngledRainIcon} from '@hugeicons/core-free-icons';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {transformDailyWeatherWidgetData} from '../../../utills/helper';
import {Text} from '../../../components';
import {useAppSelector} from '../../../redux/store';
import {WidgetDataType} from '../../../utills/constants';

export const ForecastItemDetailView = () => {
  const selectedDayData = useAppSelector(state => {
    const {weatherData, selectedDay} = state.weather;
    if ((!selectedDay && !weatherData) || !weatherData?.length) {
      return null;
    }
    return weatherData.find((item: any) => item.id === selectedDay);
  });

  const widgetData = useMemo(() => {
    return selectedDayData
      ? transformDailyWeatherWidgetData(selectedDayData)
      : [];
  }, [selectedDayData]);

  const renderItem: ListRenderItem<WidgetDataType & {value: string}> =
    useCallback(({item}) => {
      return <Widget title={item.name} icon={item.icon} value={item.value} />;
    }, []);

  if (!selectedDayData) {
    return (
      <View style={styles.container}>
        <Text>No data available for the selected day.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View id={'basic-info'} style={styles.basicInfo}>
        <View style={styles.locationInfo}>
          <Text>Chennai</Text>
          <Text>Tamil Nadu, India</Text>
        </View>
        <View style={styles.dayInfo}>
          <Text>{selectedDayData?.dayName}</Text>
          <Text>{selectedDayData?.dateLong}</Text>
        </View>
      </View>
      <View id="climate-info" style={styles.climateInfo}>
        <View testID={'temperature-info'} style={styles.temperatureInfo}>
          <Text overrideStyles={styles.climateConditionTextStyle}>
            {selectedDayData?.condition}
          </Text>
          <Text overrideStyles={styles.temperatureTextStyle}>
            {selectedDayData?.temperature}
          </Text>
          <Text overrideStyles={styles.apparentTemperatureTextStyle}>
            Feels like {selectedDayData?.apparentTemperature}
          </Text>
        </View>
        <View testID={'climate-condition'} style={styles.climateCondition}>
          <HugeiconsIcon
            icon={selectedDayData?.weatherIcon || CloudAngledRainIcon}
            size={100}
            color="white"
            strokeWidth={2}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={widgetData}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
          contentContainerStyle={styles.widgetContainer}
          columnWrapperStyle={styles.columnWrapperStyle}
          numColumns={3}
        />
      </View>
    </View>
  );
};
