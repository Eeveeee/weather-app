export function getOptionHTML(option) {
  return `
<option value="${option}" class="location__selector">${option}</option>
`;
}
export function renderOptions(options, optionsContainer) {
  options.forEach((option) => {
    optionsContainer.innerHTML = `${getOptionHTML(option)}`;
  });
}
export function addListener(element, listener, func) {
  element.addEventListener(listener, func);
}

export function doesElementExist(element) {
  const testingElement = document.querySelector(element);
  if (testingElement) {
    return testingElement;
  }
  return false;
}
export function getWeather(kind = 'main') {
  const weather = window.state.weather.weather;
  switch (kind) {
    case 'main':
      return weather.main;
    case 'description':
      return weather.description;
  }
}

export function getTemperature(kind = 'avg') {
  const temperature = window.state.weather.temperature;
  switch (kind) {
    case 'avg':
      return temperature.temp;
    case 'max':
      return temperature.temp_max;
    case 'min':
      return temperature.temp_min;
    case 'feels':
      return temperature.feels_like;
  }
}

export function getWind() {
  return window.state.weather.wind.speed;
}
