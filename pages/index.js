import { initialCards, config, cardsContainer, buttonElementEdit, buttonElementAdd, formElementEdit, formElementAdd } from '../utils/constants.js';
import { createCard, submitProfileForm, submitCardForm, addUserInfo } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';

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

const popupProfile = new Popup('.popup_place_edit-button');
const popupCard = new Popup('.popup_place_add-button');
//const popupImage = new Popup('.popup_place_click-image');

popupProfile.setEventListeners();
popupCard.setEventListeners();
//popupImage.setEventListeners();

buttonElementEdit.addEventListener('click', () => {
  popupProfile.open()
  addUserInfo();
  validationForEditForm.resertValidation();
});

buttonElementAdd.addEventListener('click', () => {
  popupCard.open()
  validationForAddForm.resertValidation();
});



formElementEdit.addEventListener('submit', submitProfileForm);
formElementAdd.addEventListener('submit', submitCardForm);

