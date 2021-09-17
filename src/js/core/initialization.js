import {
  fetchCitiesData,
  handleCities,
  fetchWeatherData,
  showWeather,
} from '../api/api';
import { selector } from '../components/selector';
window.state = {
  countries: null,
  weather: null,
};
console.log(window.state);
async function initCountrySelector() {
  await handleCities();
  selector(Object.keys(window.state.countries), 'country');
}
initCountrySelector();
// function initAll() {
//   initEnvironment();
//   applyStyles(sliderStorage.slides, userSettings.styles);
// }
