const { addListener } = require('./modules');
import * as citiesList from '../../../public/json/city.list.json';
import { getPercentOf } from '../utils/utils';
import { handleWeather } from '../api/api';

const prevSearchingData = {
  searchingStr: null,
  searchResult: null,
};
function searchBar() {
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

function optionMousedown(e) {
  const CityID = e.target.dataset.id;
  handleWeather(CityID);
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

function findRelations(firstString, secondString) {
  firstString = getHandledSearchingData(firstString);
  secondString = getHandledSearchingData(secondString);
  if (firstString.length > secondString.length) {
    firstString = firstString.substring(0, secondString.length);
    return secondString === firstString;
  }
  secondString = secondString.substring(0, firstString.length);
  return secondString === firstString;
}
function findSearchRelations(inputData, dbData) {
  inputData = getHandledSearchingData(inputData);
  dbData = getHandledSearchingData(dbData).substring(0, inputData.length);
  return inputData === dbData;
}

function filterSearchingCities(inputData, dbData) {
  const filteredCities = [];
  dbData.forEach((city) => {
    if (findSearchRelations(inputData, city.name)) {
      filteredCities.push({
        id: city.id,
        name: city.name,
        country: city.country,
      });
    }
  });
  return filteredCities;
}

function addSearchbarOptions(options) {
  const optionsContainer = document.querySelector('.searchbar-options');
  optionsContainer.innerHTML = '';
  options.forEach((option) => {
    optionsContainer.insertAdjacentHTML(
      'afterbegin',
      `<div data-id=${option.id} class="searchbar__option">${option.name}[${option.country}]</div>`
    );
  });
}

function addSearchBarFocusListener(searchBarTextElement) {
  const options = document.querySelector('.searchbar-options');
  addListener(searchBarTextElement, 'focus', (e) => {
    options.classList.add('active');
  });
}

function addSearchBarUnfocusListener(searchBarTextElement) {
  const options = document.querySelector('.searchbar-options');
  addListener(searchBarTextElement, 'blur', (e) => {
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
  const inputData = e.currentTarget.textContent;
  timeoutId.timeout = setTimeout(() => {
    const prevSearchingStr = prevSearchingData.searchingStr;
    console.log(prevSearchingStr);
    const usePrev =
      prevSearchingStr &&
      findRelations(inputData, prevSearchingStr) &&
      getHandledSearchingData(prevSearchingStr) <=
        getHandledSearchingData(inputData);
    if (inputData) {
      let filteredCities;
      if (!usePrev) {
        console.log('!usePrev');
        filteredCities = filterSearchingCities(
          inputData,
          Array.from(JSON.parse(JSON.stringify(citiesList)))
        );
      }
      if (usePrev) {
        console.log('usePrev');
        filteredCities = filterSearchingCities(
          inputData,
          prevSearchingData.searchResult
        );
      }
      prevSearchingData.searchingStr = inputData;
      prevSearchingData.searchResult = filteredCities;
      addSearchbarOptions(filteredCities);
      console.log(prevSearchingData);
    }
  }, 1000);
}

searchBar();
