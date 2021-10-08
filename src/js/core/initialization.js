import { infoBlock } from '../components/infoBlock';
import { searchBar } from '../modules/searchbar';
import { weatherByUserCoords } from '../api/api';
import { themeSwitcher } from '../modules/themeSwitcher';
document.addEventListener('DOMContentLoaded', () => {
  window.state = {
    countries: null,
    weather: null,
  };
  function initAll() {
    infoBlock();
    searchBar();
    weatherByUserCoords();
    themeSwitcher();
  }
  initAll();
});
