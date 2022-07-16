import { initialCards, config, cardsContainer, buttonElementEdit, buttonElementAdd, formElementEdit, formElementAdd } from '../utils/constants.js';
import { addUserInfo } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { Card } from '../components/Card.js';

function createCard(item, template) {
  const card = new Card(item, template);
  const cardElement = card.generateCard();
  return cardElement;
}

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
      const cardElement = createCard(cardItem, '.card-template');
      galleryCards.setItem(cardElement);
    },
  },
  '.gallery__cards'
);
galleryCards.renderItems();

const popup = new Popup('.popup');
// const popupProfile = new Popup('.popup_place_edit-button');
// const popupCard = new Popup('.popup_place_add-button');
//const popupImage = new Popup('.popup_place_click-image');
popup.setEventListeners();
// popupProfile.setEventListeners();
// popupCard.setEventListeners();
//popupImage.setEventListeners();

buttonElementEdit.addEventListener('click', () => {
  popupProfile.open();
  addUserInfo();
  validationForEditForm.resertValidation();
});

buttonElementAdd.addEventListener('click', () => {
  popupCard.open();
  validationForAddForm.resertValidation();
});

const popupProfile = new PopupWithForm('.popup_place_edit-button', {
  handleFormSubmit: (formData) => {
    const x = formData;
    //userName.textContent = nameInput.value;
    //userJob.textContent = jobInput.value;
  },
});

popupProfile.setEventListeners();


const popupCard = new PopupWithForm('.popup_place_add-button', {
  handleFormSubmit: (formData) => {
    // при создании экземпляра UserCard передаём
    // ему объект с данными формы
    //const cardElement = createCard(formData, '.card-template');
    cardsContainer.prepend(createCard(formData, '.card-template'));
    popupCard.close()
  },
});

popupCard.setEventListeners();

//formElementEdit.addEventListener('submit', submitProfileForm);
//formElementAdd.addEventListener('submit', submitCardForm);
