import { addListener } from '../modules/modules';

function toggleInfoState(e) {
  e.currentTarget.classList.toggle('active');
}

export function infoBlock() {
  const contentContainer = document.querySelector('.content');
  const infoBlock = document.createElement('div');
  infoBlock.classList.add('info-block');
  infoBlock.innerHTML = `
  <div class="title-block">
    <div class="info-block__title">Список поддерживаемых стран:</div>
    <div class="icon-wrapper">
      <svg
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25954 5.70347L6 1.69231L10.7405 5.70347"
          stroke="black"
          stroke-width="1.81493"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <ul class="info-block-list"></ul>
  `;
  contentContainer.appendChild(infoBlock);
  const optionsContainer = document.querySelector('.info-block-list');
  addListener(infoBlock, 'click', toggleInfoState);
  const supportedCounties = [
    'Литва',
    'Россия',
    'США',
    'Украина',
    'Беларусь',
    'Финляндия',
    'Казахстан',
    'Турция',
    'Египет',
    'Узбекистан',
    'Афганистан',
    'Китай',
    'Польша',
    'Франция',
    'Испания',
    'Швеция',
    'Швейцария',
    'Бразилия',
    'Мексика',
  ];
  supportedCounties.forEach((country) => {
    optionsContainer.insertAdjacentHTML(
      'beforeend',
      getInfoOptionHTML(country)
    );
  });
}
function getInfoOptionHTML(optionContent) {
  return `
  <li class="list__item">${optionContent}</li>
  `;
}
