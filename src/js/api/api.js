export async function fetchCitiesData() {
  const link = `https://countriesnow.space/api/v0.1/countries/population/cities`;
  const response = await fetch(link);
  const data = await response.json();
  return data;
}
export async function handleCities() {
  let data = await fetchCitiesData();
  data = data.data;
  const countries = {};
  data.forEach((city) => {
    const currentCountry = city.country;
    if (!countries.hasOwnProperty(currentCountry)) {
      countries[`${currentCountry}`] = [];
    }
    countries[`${currentCountry}`].push(city.city);
  });
  window.state = { ...window.state, countries };
}

export async function fetchWeatherData(city) {
  const link = `http://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&lang=ru&appid=${process.env.WEATHER_API_KEY}`;
  const response = await fetch(link);
  if (!response.ok) {
    console.log('Пизда у тебя нет такого города');
  }
  const data = await response.json();
  console.log(data);
  return data;
}
export async function handleWeather(city) {
  console.log('SHOW WEATHER');
  const data = await fetchWeatherData(city);
  console.log(data);
  const weather = {
    temperature: data.main,
    weather: data.weather[0],
    wind: data.wind,
  };
  window.state = { ...window.state, weather };
  console.log(window.state);
}
