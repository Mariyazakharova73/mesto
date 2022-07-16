import { Card } from '../components/Card.js';
import { nameInput, jobInput, userName, userJob, titleInput, linkInput, cardsContainer, formElementAdd, popupCard, popupProfile } from '../utils/constants.js';

// function createCard(item, template) {
//   const card = new Card(item, template);
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// function openPopup(popupElement) {
//   popupElement.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupByEsc);
// }

function addUserInfo() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

// function closePopup(popupElement) {
//   popupElement.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupByEsc);
// }

// const closePopupByEsc = (evt) => {
//   if (evt.key === 'Escape') {
//     const popupElement = document.querySelector('.popup_opened');
//     closePopup(popupElement);
//   }
// };

// function submitProfileForm(evt) {
//   evt.preventDefault();
//   userName.textContent = nameInput.value;
//   userJob.textContent = jobInput.value;
//   //closePopup(popupProfile);
// }

function inactivateButton() {
  const button = formElementAdd.querySelector('.popup__form-button');
  button.setAttribute('disabled', true);
  button.classList.add('popup__form-button_inactive');
}

// function submitCardForm(evt) {
//   evt.preventDefault();
//   const obj = {
//     name: titleInput.value,
//     link: linkInput.value,
//   };
//   cardsContainer.prepend(createCard(obj, '.card-template'));
//   formElementAdd.reset();
//   closePopup(popupCard);
//   inactivateButton();
// }

// const closePopupByOverlay = () => {
//   const popupList = Array.from(document.querySelectorAll('.popup'));
//   popupList.forEach((popupElement) => {
//     popupElement.addEventListener('mousedown', (evt) => {
//       if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
//         closePopup(popupElement);
//       }
//     });
//   });
// };

export {  addUserInfo,  inactivateButton }