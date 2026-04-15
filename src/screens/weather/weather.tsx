import React, {useCallback, useLayoutEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './weather.style';
import {ForecastItemDetailView} from './forecast-item-detail-view/forecast-item-detail-view';
import {ForecastList} from './forecast-list/forecast-list';
import {getWeather} from '../../redux/weather/weatherActions';
import {Text} from '../../components';
import {CloudAngledZapIcon, CloudOffIcon} from '@hugeicons/core-free-icons';
import {colors} from '../../utils/constants';
import {useNetInfo} from '@react-native-community/netinfo';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {ErrorView} from '../../components';

export const Weather = () => {
  const {loading, error, weatherData} = useAppSelector(state => state.weather);
  const {isConnected, type} = useNetInfo();

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (isConnected && weatherData.length === 0) {
      dispatch(getWeather());
    }
  }, [dispatch, isConnected, weatherData.length]);

  const handleRetry = useCallback(() => {
    dispatch(getWeather());
  }, [dispatch]);

  if (loading || (!isConnected && type === 'unknown')) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.highlightPrimary} />
        <Text>Loading weather data...</Text>
      </View>
    );
  }
  if (!isConnected && weatherData.length === 0) {
    return (
      <ErrorView
        message="No internet connection"
        subMessage="Please check your internet connection and try again later."
        icon={CloudOffIcon}
        onRetry={handleRetry}
      />
    );
  }
  if (error) {
    return (
      <ErrorView
        message={error.message}
        subMessage="Please try again later."
        icon={CloudAngledZapIcon}
        onRetry={handleRetry}
      />
    );
  }
  if (weatherData.length === 0) {
    return (
      <ErrorView
        message={'No Weather Data'}
        subMessage="Please try again later."
        icon={CloudAngledZapIcon}
        onRetry={handleRetry}
      />
    );
  }
  return (
    <View style={styles.container}>
      <ForecastItemDetailView />
      <ForecastList />
    </View>
  );
};
