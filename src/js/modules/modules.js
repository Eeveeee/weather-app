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

// export function documentListener() {
//   document.addEventListener('');
// }
