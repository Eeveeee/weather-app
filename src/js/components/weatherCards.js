import { weatherCard } from './weatherCard';

export function weatherCards() {
  const whichRender = ['state', 'temperature', 'wind'];
  const cardsContainer = document.querySelector('.weather-cards');
  cardsContainer.innerHTML = '';
  const weather = JSON.parse(JSON.stringify(window.state.weather));
  whichRender.forEach((type) => {
    cardsContainer.insertAdjacentHTML('beforeend', weatherCard(type, weather));
  });
}
