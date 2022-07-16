import { formElementAdd } from '../utils/constants.js';

export default function inactivateButton() {
  const button = formElementAdd.querySelector('.popup__form-button');
  button.setAttribute('disabled', true);
  button.classList.add('popup__form-button_inactive');
}

