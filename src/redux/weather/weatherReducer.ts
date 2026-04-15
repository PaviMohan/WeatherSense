import {transformWeatherDataType} from '../../utils/constants';
import {
  GET_WEATHER,
  GET_WEATHER_FAILURE,
  GET_WEATHER_SUCCESS,
  SET_SELECTED_DAY,
} from './weatherActions';

export type weatherReducerType = {
  weatherData: transformWeatherDataType[];
  loading: boolean;
  error: any;
  selectedDay?: number;
};
const INITIAL_STATE: weatherReducerType = {
  weatherData: [],
  loading: false,
  error: null,
  selectedDay: undefined,
};

const weatherReducer = (
  state = INITIAL_STATE,
  action: {type: string; payload?: any},
): weatherReducerType => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        selectedDay: action.payload?.[0]?.id, // Set the first day as selected by default
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        weatherData: [],
        error: action.payload,
      };
    case SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
