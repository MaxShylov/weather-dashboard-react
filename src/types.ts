type LocalNames = Partial<Record<string, string>>;

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface CityResponse extends Coordinates {
  country: string;
  local_names?: LocalNames;
  name: string;
  state?: string;
}

export interface City extends Omit<CityResponse, 'local_names'> {
  latLon: `${Coordinates['lat']}-${Coordinates['lon']}`;
  localNames: LocalNames;
}

export interface WeatherCondition {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface MainWeather {
  feels_like: number;
  grnd_level?: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WindData {
  deg: number;
  gust?: number;
  speed: number;
}

export interface Clouds {
  all: number;
}

export interface Precipitation {
  '1h'?: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: MainWeather;
  name: string;
  rain?: Precipitation;
  snow?: Precipitation;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: WeatherCondition[];
  wind: WindData;
}

export interface WeatherParams extends Coordinates {
  lang: string;
}

export interface ForecastMain {
  feels_like: number;
  grnd_level?: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface ForecastWind {
  deg: number;
  gust?: number;
  speed: number;
}

export interface ForecastClouds {
  all: number;
}

export interface ForecastPrecipitation {
  '3h'?: number;
}

export interface ForecastSys {
  pod: 'd' | 'n';
}

export interface ForecastListItem {
  clouds: ForecastClouds;
  dt: number;
  dt_txt: string;
  main: ForecastMain;
  pop: number;
  rain?: ForecastPrecipitation;
  snow?: ForecastPrecipitation;
  sys: ForecastSys;
  visibility: number;
  weather: WeatherCondition[];
  wind: ForecastWind;
}

export interface ForecastCity {
  coord: Coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface ForecastResponse {
  city: ForecastCity;
  cnt: number;
  cod: string;
  list: ForecastListItem[];
  message: number;
}

export interface DayForecast {
  clouds: number;
  conditionDescription: string;
  conditionIcon: string;
  dateUnix: number;
  humidity: number;
  id: number;
  pressure: number;
  rain: number;
  snow: number;
  temp: number;
  tempFeelsLike: number;
  visibility: number;
  windDeg: number;
  windSpeed: number;
}

export interface ForecastParams extends Coordinates {
  lang: string;
}
