export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
export const SET_WEATHER = 'SET_WEATHER';
export const SET_SELECTED_DAY = 'SET_SELECTED_DAY';

export const getWeather = () => ({
  type: GET_WEATHER,
});

export const setSelectedDay = (day: number) => ({
  type: SET_SELECTED_DAY,
  payload: day,
});
