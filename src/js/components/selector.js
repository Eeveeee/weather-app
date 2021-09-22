import { addListener, doesElementExist } from '../modules/modules';
import { optionComponent } from './option';
import { handleWeather } from '../api/api';
export function selector(options, type = 'country') {
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
  selectorElement.insertAdjacentHTML(
    'afterbegin',
    `<option hidden selected disabled value="" class="location__option">Варианты выбора</option>`
  );
  addListenerByType(selectorElement, type);
}

function citySelectorListener(e) {
  console.log('citySelectorListener emitted');
  const selectedCity = e.currentTarget.value;
  // const selectedCity = this.value;
  handleWeather(selectedCity);
  console.log(window.state);
}

function countrySelectorListener(e) {
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
      addListener(element, 'change', citySelectorListener);
      // const event = new Event('change');
      // element.dispatchEvent(event);
      // addListener(
      //   element,
      //   'change',
      //   (() => {
      //     citySelectorListener.call(element);
      //     return (e) => citySelectorListener(e);
      //   })()
      // );
      break;
  }
}
