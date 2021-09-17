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
  console.log(window.state);
}

export async function fetchWeatherData(city) {
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a555b9e83ec96b8384916c6c0a02b4e`;
  const response = await fetch(link);
  const data = await response.json();
  return data;
}
export async function showWeather() {
  const weather = await fetchWeatherData('Norilsk');
  console.log(weather);
}
