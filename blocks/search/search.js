import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();
  const { inputPlaceholder, inputLink } = placeholders;

  function handleSearch(value) {
    const baseUrl = inputLink;
    const searchURL = `${baseUrl}?q=${value}`;
    window.open(searchURL, '_blank');
  }

  const inputField = document.createElement('input');
  inputField.classList.add('input-field');
  inputField.setAttribute('type', 'search');
  inputField.setAttribute('placeholder', inputPlaceholder);
  inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = inputField.value.trim();
      if (inputValue) {
        handleSearch(inputValue);
      }
    }
  });
  block.append(inputField);
}