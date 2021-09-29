import { svgSelector } from '../svgSelector/svgSelector';
export function weatherCard(type, weather) {
  const state = weather.weather;
  const temperature = weather.temperature;
  const wind = weather.wind;
  const handledDescription =
    state.description[0].toUpperCase() + state.description.substring(1);
  switch (type) {
    case 'state':
      return `<div class="weather__card weather__card_state">
      <div class="card-icon-wrapper">
        ${svgSelector(state.main)}
      </div>
      <div class="card-text">${handledDescription}</div>
    </div>`;
    case 'temperature':
      return `<div class="weather__card weather__card_temperature">
      <div class="card-icon-wrapper">
      ${svgSelector(getTemperatureIconID(temperature.temp))}
      </div>
      <div class="card-text">
     
      <div class='value-title'>Средняя температура: </div><div class='value'> ${temperature.temp.toFixed(
        1
      )}°</div>
      
      
      <div class='value-title'>Ощущается как: </div> <div class='value'>${temperature.feels_like.toFixed(
        1
      )}°</div>
      
     
      <div class='value-title'>Минимальная температура: </div> <div class='value'>${temperature.temp_min.toFixed(
        1
      )}°
      </div>
     
       <div class='value-title'>Максимальная температура: </div> <div class='value'>${temperature.temp_max.toFixed(
         1
       )}°</div>
      
      </div>
    </div>`;
    case 'wind':
      return `<div class="weather__card weather__card_wind">
      <div class="card-icon-wrapper">
      ${svgSelector('windy')}
      </div>
      <div class="card-text">
      <div class='value-title'>Скорость ветра: </div> <div class="value">${
        wind.speed
      } м/c</div>
      </div>
    </div>`;

    default:
      break;
  }
}

function getTemperatureIconID(temperature) {
  if (temperature > 30) {
    return 'temperatureHigh';
  }
  if (temperature < 30 && temperature > 0) {
    return 'temperatureNormal';
  }
  if (temperature <= 0) {
    return 'temperatureLow';
  }
}
