import axios from 'axios';

// Создаем инстанс axios с базовой конфигурацией
export const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Добавляем интерцептор для автоматической подстановки API-ключа
apiClient.interceptors.request.use((config) => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Храним ключ в env
  if (apiKey) {
    // eslint-disable-next-line no-param-reassign
    config.params = { ...config.params, appid: apiKey };
  }
  return config;
});
