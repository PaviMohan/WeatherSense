import {IconSvgElement} from '@hugeicons/react-native';
import {
  DAILY_WIDGETS,
  transformWeatherDataType,
  weatherApiResponseType,
  WEATHER_CODE_INFO,
} from './constants';

export const getLocalISODate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const getDayByTimestamp = (timestamp: number) => {
  const weatherDate = new Date(Number(timestamp) * 1000);

  const dateInfo = {
    dateLong: weatherDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    dateShort: weatherDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
    }),
    dayName: weatherDate.toLocaleDateString('en-GB', {weekday: 'long'}),
  };
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (weatherDate.toDateString() === today.toDateString()) {
    dateInfo.dayName = 'Today';
    dateInfo.dateShort = 'Today';
  } else if (weatherDate.toDateString() === tomorrow.toDateString()) {
    dateInfo.dayName = 'Tomorrow';
    dateInfo.dateShort = 'Tomorrow';
  }
  return dateInfo;
};

export const transformWeatherData = (
  data: weatherApiResponseType,
  noOfDays: number = 5,
): transformWeatherDataType[] => {
  try {
    const transformedData: transformWeatherDataType[] = [];
    if (!data || !data?.daily) {
      return transformedData;
    }
    const {daily, daily_units: dailyUnits} = data;

    for (let i = 0; i < noOfDays; i++) {
      const {dateLong, dateShort, dayName} = getDayByTimestamp(daily.time[i]);
      const weatherCondition = WEATHER_CODE_INFO[daily.weather_code[i]] || {};

      transformedData.push({
        id: daily?.time[i],
        timestamp: daily.time[i],
        dateLong: dateLong,
        dateShort: dateShort,
        dayName: dayName,
        weatherCode: daily?.weather_code[i],
        condition: weatherCondition?.description,
        weatherIcon: weatherCondition?.icon,
        temperature: `${daily?.temperature_2m_mean[i]} ${dailyUnits?.temperature_2m_mean}`,
        apparentTemperature: `${daily.apparent_temperature_mean[i]} ${dailyUnits.apparent_temperature_mean}`,
        humidity: `${daily.relative_humidity_2m_mean[i]}${dailyUnits.relative_humidity_2m_mean}`,
        precipitation: `${daily.precipitation_probability_mean[i]}${dailyUnits.precipitation_probability_mean}`,
        windSpeed: `${daily.wind_speed_10m_min[i]} ${dailyUnits.wind_speed_10m_min}`,
        surfacePressure: `${daily.surface_pressure_mean[i]} ${dailyUnits.surface_pressure_mean}`,
        visibility: `${daily.visibility_mean[i]} ${dailyUnits.visibility_mean}`,
        uvIndex: `${daily.uv_index_max[i]} ${dailyUnits.uv_index_max}`,
      });
    }
    return transformedData;
  } catch (error) {
    return [];
  }
};

export const transformDailyWeatherWidgetData = (
  dailyData: transformWeatherDataType,
): {
  id: string;
  name: string;
  icon: IconSvgElement;
  value: string;
}[] => {
  if (!dailyData) {
    return [];
  }

  const data = Object.keys(DAILY_WIDGETS).map(key => {
    const dataKey = key as keyof transformWeatherDataType;
    return {
      ...DAILY_WIDGETS[key],
      value: String(dailyData[dataKey]),
    };
  });

  return data;
};
