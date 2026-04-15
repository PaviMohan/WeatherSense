import {
  CloudAngledRainIcon,
  CloudAngledRainZapIcon,
  CloudAngledZapIcon,
  CloudBigRainIcon,
  CloudHailstoneIcon,
  CloudIcon,
  CloudLittleSnowIcon,
  CloudMidRainIcon,
  CloudMidSnowIcon,
  CloudSlowWindIcon,
  FastWindIcon,
  HumidityIcon,
  Sun03Icon,
  SunCloud02Icon,
  SunCloudAngledRain02Icon,
  SunCloudSnow02Icon,
  Timer01Icon,
  Uv02Icon,
  ViewIcon,
} from '@hugeicons/core-free-icons';
import {IconSvgElement} from '@hugeicons/react-native';

export const colors: {[key: string]: string} = {
  light: '#ffffff',
  textSecondary: '#000000',
  backgroundPrimary: '#95d6ea',
  backgroundSecondary: '#7bc7dd',
  widgetBackgroundPrimary: '#62a1c7',
  widgetBackgroundSecondary: '#528ab4',
  highlightPrimary: '#15719f',
};

export const ERROR_TYPES: {[key: string]: string} = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  API_ERROR: 'API_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  CRASH: 'CRASH',
};

export type WidgetDataType = {
  id: string;
  name: string;
  icon: IconSvgElement;
};
export const DAILY_WIDGETS: {
  [key: string]: {id: string; name: string; icon: IconSvgElement};
} = {
  humidity: {id: 'humidity', name: 'Humidity', icon: HumidityIcon},
  precipitation: {
    id: 'precipitation',
    name: 'Precipitation',
    icon: CloudAngledRainIcon,
  },
  windSpeed: {id: 'windSpeed', name: 'Wind Speed', icon: FastWindIcon},
  surfacePressure: {
    id: 'surfacePressure',
    name: 'Pressure',
    icon: Timer01Icon,
  },
  visibility: {id: 'visibility', name: 'Visibility', icon: ViewIcon},
  uvIndex: {id: 'uvIndex', name: 'UV Index', icon: Uv02Icon},
};

export const WEATHER_CODE_INFO: {
  [key: number]: {description: string; icon: IconSvgElement};
} = {
  0: {description: 'Clear sky', icon: Sun03Icon},
  1: {description: 'Mainly clear', icon: SunCloud02Icon},
  2: {description: 'Partly cloudy', icon: SunCloud02Icon},
  3: {description: 'Overcast', icon: CloudIcon},
  45: {description: 'Fog', icon: CloudSlowWindIcon},
  48: {description: 'Depositing rime fog', icon: CloudSlowWindIcon},
  51: {description: 'Light drizzle', icon: CloudBigRainIcon},
  53: {description: 'Moderate drizzle', icon: CloudBigRainIcon},
  55: {description: 'Dense drizzle', icon: CloudBigRainIcon},
  56: {description: 'Light freezing drizzle', icon: CloudBigRainIcon},
  57: {description: 'Dense freezing drizzle', icon: CloudBigRainIcon},
  61: {description: 'Slight rain', icon: CloudMidRainIcon},
  63: {description: 'Moderate rain', icon: CloudMidRainIcon},
  65: {description: 'Heavy rain', icon: CloudAngledRainIcon},
  66: {description: 'Light freezing rain', icon: CloudAngledRainIcon},
  67: {description: 'Heavy freezing rain', icon: CloudAngledRainIcon},
  71: {description: 'Slight snow fall', icon: CloudMidSnowIcon},
  73: {description: 'Moderate snow fall', icon: CloudLittleSnowIcon},
  75: {description: 'Heavy snow fall', icon: CloudHailstoneIcon},
  77: {description: 'Snow grains', icon: CloudHailstoneIcon},
  80: {description: 'Slight rain showers', icon: SunCloudAngledRain02Icon},
  81: {description: 'Moderate rain showers', icon: SunCloudAngledRain02Icon},
  82: {description: 'Violent rain showers', icon: SunCloudAngledRain02Icon},
  85: {description: 'Slight snow showers', icon: SunCloudSnow02Icon},
  86: {description: 'Heavy snow showers', icon: SunCloudSnow02Icon},
  95: {description: 'Thunderstorm', icon: CloudAngledZapIcon},
  96: {
    description: 'Thunderstorm with slight hail',
    icon: CloudAngledRainZapIcon,
  },
  99: {
    description: 'Thunderstorm with heavy hail',
    icon: CloudAngledRainZapIcon,
  },
};

export type transformWeatherDataType = {
  id: number;
  timestamp: number;
  dateLong: string;
  dateShort: string;
  dayName: string;
  weatherCode: number;
  condition: string;
  weatherIcon: IconSvgElement;
  temperature: string;
  apparentTemperature: string;
  humidity: string;
  precipitation: string;
  windSpeed: string;
  surfacePressure: string;
  visibility: string;
  uvIndex: string;
};
export type weatherApiResponseType = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    temperature_2m_mean: string;
    weather_code: string;
    apparent_temperature_mean: string;
    uv_index_max: string;
    uv_index_clear_sky_max: string;
    precipitation_probability_mean: string;
    relative_humidity_2m_mean: string;
    surface_pressure_mean: string;
    wind_speed_10m_min: string;
    visibility_mean: string;
  };
  daily: {
    time: number[];
    temperature_2m_mean: number[];
    weather_code: number[];
    apparent_temperature_mean: number[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    precipitation_probability_mean: number[];
    relative_humidity_2m_mean: number[];
    surface_pressure_mean: number[];
    wind_speed_10m_min: number[];
    visibility_mean: number[];
  };
};

export const DEFAULT_ERROR_MESSAGE =
  'An unknown error occurred while fetching weather data.';
