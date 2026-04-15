import {
  all,
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects';
import {
  GET_WEATHER,
  GET_WEATHER_FAILURE,
  GET_WEATHER_SUCCESS,
} from './weatherActions';
import axios from 'axios';
import {getLocalISODate, transformWeatherData} from '../../utils/helper';
import {DEFAULT_ERROR_MESSAGE, ERROR_TYPES} from '../../utils/constants';

const getWeatherApi = async () => {
  const endDayCount = 4;
  const currentDate = new Date();
  const startDate = getLocalISODate(currentDate);

  const endDateObj = new Date(currentDate);
  endDateObj.setDate(endDateObj.getDate() + endDayCount);
  const endDate = getLocalISODate(endDateObj);

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=13.0414&longitude=80.1267&daily=temperature_2m_mean,weather_code,apparent_temperature_mean,uv_index_max,uv_index_clear_sky_max,precipitation_probability_mean,relative_humidity_2m_mean,surface_pressure_mean,wind_speed_10m_min,visibility_mean&timezone=${tz}&timeformat=unixtime&start_date=${startDate}&end_date=${endDate}`,
  );
};

function* fetchWeather(): Generator<CallEffect | PutEffect, void, any> {
  try {
    const response = yield call(getWeatherApi);
    if (response?.status === 200 && response?.data) {
      const transformedData = transformWeatherData(response?.data);
      if (transformedData.length > 0) {
        yield put({
          type: GET_WEATHER_SUCCESS,
          payload: transformedData,
        });
      } else {
        yield put({
          type: GET_WEATHER_FAILURE,
          payload: {
            type: ERROR_TYPES.CRASH,
            message: DEFAULT_ERROR_MESSAGE,
          },
        });
      }
    } else if (response?.status === 400 && response?.error) {
      yield put({
        type: GET_WEATHER_FAILURE,
        payload: {
          type: ERROR_TYPES.API_ERROR,
          message: response?.error,
        },
      });
    } else {
      yield put({
        type: GET_WEATHER_FAILURE,
        payload: {
          type: ERROR_TYPES.UNKNOWN_ERROR,
          message: DEFAULT_ERROR_MESSAGE,
        },
      });
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : DEFAULT_ERROR_MESSAGE;

    yield put({
      type: GET_WEATHER_FAILURE,
      payload: {
        type: ERROR_TYPES.CRASH,
        message: errorMessage,
      },
    });
  }
}
export default function* weatherSaga() {
  yield all([takeLatest(GET_WEATHER, fetchWeather)]);
}
