import { weatherCards } from '../components/weatherCards';
import { popUp } from '../components/popUp';

export function weatherByUserCoords() {
  navigator.geolocation.getCurrentPosition(
    async (Position) => {
      const lat = Position.coords.latitude;
      const lon = Position.coords.longitude;
      await handleWeather('', {
        lat: lat,
        lon: lon,
      });
      popUp('Показана погода согласно вашей геолокации');
      weatherCards();
    },
    () => {
      popUp(
        'Геолокация недоступна, для быстрого поиска включите её и перезагрузите страницу'
      );
    }
  );
}

export async function fetchWeatherData(city, coords = null) {
  let link = null;
  if (coords) {
    link = ` http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&lang=ru&appid=${process.env.WEATHER_API_KEY}`;
  } else {
    link = `http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&lang=ru&appid=${process.env.WEATHER_API_KEY}`;
  }
  const response = await fetch(link);
  const data = await response.json();
  if (!response.ok) {
    let description = data.message;
    if (response.status >= 400 && response.status < 500) {
      description =
        'В приложении возникла ошибка, попробуйте воспользоваться позже';
    }
    if (response.status >= 500 && response.status < 511) {
      description = 'Возникла ошибка сервера, попробуйте воспользоваться позже';
    }
    popUp(description, response.status);
    throw new Error(`${data.message} [${response.status}]`);
  }
  return data;
}
export async function handleWeather(city, coords = null) {
  let data = null;
  data = await fetchWeatherData(city, coords);
  const weather = {
    temperature: data.main,
    weather: data.weather[0],
    wind: data.wind,
  };
  window.state = { ...window.state, weather };
}
