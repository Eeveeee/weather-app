import { addListener, doesElementExist } from '../modules/modules';
import { optionComponent } from './option';

export function selector(options, type = 'country') {
  const selectorHTML = `
  <select
              name="${type}"
              class="location__selector location-${type}"
            ></select>
  `;
  const selectorElement = document.createElement('select');
  selectorElement.classList.add(
    'location__selector',
    `location__selector__${type}`
  );
  const selectorsContainer = document.querySelector('.location-selectors');
  selectorsContainer.appendChild(selectorElement);
  options.forEach((option) => {
    selectorElement.insertAdjacentHTML(
      'afterbegin',
      `${optionComponent(option)}`
    );
  });
  addListenerByType(selectorElement, type);
}

function citySelectorListener(e, element) {}

function countrySelectorListener(e, element) {
  const selectedCountry = e.currentTarget.value;
  const citySelector = doesElementExist('.location__selector__city');
  if (citySelector) {
    citySelector.removeEventListener('change', citySelectorListener);
    citySelector.remove();
  }
  selector(window.state.countries[selectedCountry], 'city');
  doesElementExist('.location__selector__city');
}

function addListenerByType(element, type) {
  switch (type) {
    case 'country':
      addListener(element, 'change', (e) => {
        countrySelectorListener(e, element);
      });
      break;
    case 'city':
      break;
  }
}
