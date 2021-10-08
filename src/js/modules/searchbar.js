import { addListener } from './modules';
import * as citiesList from '../../../public/json/city.list.json';
import { getPercentOf, compareSimilarity } from '../utils/utils';
import { handleWeather } from '../api/api';
import { weatherCards } from '../components/weatherCards';

const prevSearchingData = {
  searchingStr: null,
  searchResult: null,
};
export function searchBar() {
  const searchBarContainer = document.querySelector('.searchbar-wrapper');
  renderSearchbar(searchBarContainer, searchBar);
  const searchBarElement = document.querySelector('.searchbar');
  const searchBarTextElement = document.querySelector('.searchbar-text');
  const searchBarOptions = document.querySelector('.searchbar-options');
  addOptionsListener(searchBarOptions);
  addSearchBarSearchListener(searchBarTextElement);
  addSearchBarFocusListener(searchBarTextElement);
  addSearchBarUnfocusListener(searchBarTextElement);
}
function addOptionsListener(element) {
  element.addEventListener('mousedown', (e) => {
    optionMousedown(e);
  });
}
async function optionMousedown(e) {
  const target = e.target;
  const options = document.querySelectorAll('.searchbar__option');
  const CityID = target.dataset.id;
  const CityName = target.querySelector('.city-name').innerText;
  const searchBarTextElement = document.querySelector('.searchbar-text');
  searchBarTextElement.innerText = CityName;
  await handleWeather(CityID);
  weatherCards();
}

function renderSearchbar(searchBarContainer, searchBar) {
  searchBar = document.createElement('div');
  searchBar.className = 'searchbar';
  searchBar.innerHTML = `<div class="searchbar-text" contenteditable="true"></div>
  <div class="searchbar-options"></div>`;
  searchBarContainer.appendChild(searchBar);
}

function getHandledSearchingData(data) {
  data = data.toLowerCase().trim().replace('city', '').replace('state', '');
  let dataArr = Array.from(data);
  let newString = '';
  const splitters = [' ', '_', '-', '(', ')', '[', ']'];
  dataArr.forEach((symbol) => {
    if (!splitters.includes(symbol)) {
      newString += symbol;
    }
  });
  return newString;
}

function isStringsRelate(firstString, secondString) {
  firstString = getHandledSearchingData(firstString);
  secondString = getHandledSearchingData(secondString);
  if (firstString.length > secondString.length) {
    firstString = firstString.substring(0, secondString.length);
    return secondString === firstString;
  }
  secondString = secondString.substring(0, firstString.length);
  return secondString === firstString;
}
function isSearchRelate(inputData, dbData) {
  inputData = getHandledSearchingData(inputData);
  dbData = getHandledSearchingData(dbData).substring(0, inputData.length);
  return inputData === dbData;
}

function getSimilarityPercent(inputData, dbData) {
  inputData = getHandledSearchingData(inputData);
  dbData = getHandledSearchingData(dbData);
  let relationCounter = 0;
  dbData = Array.from(dbData);
  dbData.forEach((symbol, index) => {
    if (symbol === inputData[index]) {
      relationCounter++;
    }
  });
  return getPercentOf(relationCounter, dbData.length);
}

function filterSearchingCities(inputData, dbData) {
  let filteredCities = [];
  const similarity = null;
  dbData.forEach((city) => {
    if (isSearchRelate(inputData, city.name)) {
      filteredCities.push({
        id: city.id,
        name: city.name,
        country: city.country,
        similarity: getSimilarityPercent(inputData, city.name),
      });
    }
  });
  filteredCities.sort(compareSimilarity);
  return filteredCities;
}

function clearSearchbarOptions() {
  const optionsContainer = document.querySelector('.searchbar-options');
  optionsContainer.innerHTML = '';
}

function addSearchbarOptions(options) {
  const optionsContainer = document.querySelector('.searchbar-options');
  optionsContainer.innerHTML = '';
  options.forEach((option) => {
    optionsContainer.insertAdjacentHTML(
      'afterbegin',
      `<div  data-id=${option.id} class="searchbar__option">
      <span class="city-name">${option.name}</span>
      <span class="country-code">[ ${option.country} ]</span>
    </div>`
    );
  });
}

function addSearchBarFocusListener(searchBarTextElement) {
  const options = document.querySelector('.searchbar-options');
  addListener(searchBarTextElement, 'focus', (e) => {
    event.stopImmediatePropagation();
    options.classList.add('active');
  });
}

function addSearchBarUnfocusListener(searchBarTextElement) {
  const options = document.querySelector('.searchbar-options');
  addListener(searchBarTextElement, 'blur', (e) => {
    event.stopImmediatePropagation();
    options.classList.remove('active');
  });
}
function addSearchBarSearchListener(searchBarTextElement) {
  const timeOutId = {
    timeout: null,
  };
  addListener(searchBarTextElement, 'input', (e) => {
    clearTimeout(timeOutId.timeout);
    searchBarChange(e, timeOutId);
  });
}

function searchBarChange(e, timeoutId) {
  const searchBar = e.currentTarget;
  let inputData = e.currentTarget.textContent;
  if (inputData.length === 0) {
    const optionsContainer = document.querySelector('.searchbar-options');
    optionsContainer.blur();
    optionsContainer.innerHTML = '';
  }
  if (inputData === ' ') {
    e.currentTarget.textContent = '';
    return;
  }
  timeoutId.timeout = setTimeout(() => {
    const prevSearchingStr = prevSearchingData.searchingStr;
    const usePrev =
      prevSearchingStr &&
      isStringsRelate(inputData, prevSearchingStr) &&
      getHandledSearchingData(prevSearchingStr) <=
        getHandledSearchingData(inputData);
    if (inputData) {
      let filteredCities;
      if (!usePrev) {
        filteredCities = filterSearchingCities(
          inputData,
          Array.from(JSON.parse(JSON.stringify(citiesList)))
        );
      }
      if (usePrev) {
        filteredCities = filterSearchingCities(
          inputData,
          prevSearchingData.searchResult
        );
      }
      prevSearchingData.searchingStr = inputData;
      prevSearchingData.searchResult = filteredCities;
      addSearchbarOptions(filteredCities);
    }
  }, 1000);
}
