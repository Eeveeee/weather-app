import { addListener } from './modules';

export function themeSwitcher() {
  const switcher = document.querySelector('.theme-switcher');
  const isLight = JSON.parse(window.localStorage.getItem('theme'));
  if (isLight) {
    changeTheme();
  }
  addListener(switcher, 'click', () => {
    changeTheme();
  });
}
function changeTheme() {
  const switcher = document.querySelector('.theme-switcher');
  const globalContainer = document.querySelector('.global-container');
  globalContainer.classList.toggle('light');
  switcher.classList.toggle('light');
  const isLight = globalContainer.classList.contains('light');
  if (isLight) {
    window.localStorage.setItem('theme', isLight);
    return;
  }
  window.localStorage.setItem('theme', null);
}
