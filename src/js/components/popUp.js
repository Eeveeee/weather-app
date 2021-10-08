export function popUp(text, status = 'message') {
  if (status >= 400) {
    status = 'error';
  }
  const popUp = document.querySelector('.status-popUp');
  const popUpText = popUp.querySelector('.status-popUp__text');
  popUpText.innerText = `${text}`;
  popUp.classList.toggle('active');
  popUp.classList.add(`${status}`);
  const timeOutId = {
    timeout: null,
  };
  clearTimeout(timeOutId.timeout);
  setActivePopUp(popUp, popUpText, status, timeOutId);
}
function setActivePopUp(popUp, popUpText, status, timeOutId) {
  timeOutId.timeout = setTimeout(() => {
    popUp.classList.toggle('active');
    popUp.classList.remove(`${status}`);
    popUpText.innerText = '';
  }, 5000);
}
