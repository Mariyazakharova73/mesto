import { initialCards, config, cardsContainer, buttonElementEdit, buttonElementAdd, formElementEdit, formElementAdd, popupProfile, popupCard } from '../utils/constants.js';
import { createCard, openPopup, submitProfileForm, submitCardForm, closePopupByOverlay, addUserInfo } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';

const validationForEditForm = new FormValidator(config, editForm);
validationForEditForm.enableValidation();
const validationForAddForm = new FormValidator(config, addForm);
validationForAddForm.enableValidation();

// initialCards.forEach((item) => {
//   cardsContainer.append(createCard(item, '.card-template'));
// });

const galleryCards = new Section(
  {
    data: initialCards,
    renderer: (cardItem) => {
      const cardElement = createCard(cardItem, '.card-template')
      galleryCards.setItem(cardElement);
    },
  },
  '.gallery__cards'
);

galleryCards.renderItems();

buttonElementEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  addUserInfo();
  validationForEditForm.resertValidation();
});

buttonElementAdd.addEventListener('click', () => {
  openPopup(popupCard);
  validationForAddForm.resertValidation();
});

formElementEdit.addEventListener('submit', submitProfileForm);
formElementAdd.addEventListener('submit', submitCardForm);

closePopupByOverlay();
