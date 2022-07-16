import { initialCards, config, cardsContainer, buttonElementEdit, buttonElementAdd, nameInput, jobInput } from '../utils/constants.js';
import inactivateButton from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';

function createCard(item, template) {
  const card = new Card(item, template, {
    handleCardClick: (x, y) => {
      const popupImage = new PopupWithImage('.popup_place_click-image');
      popupImage.setEventListeners();
      popupImage.open(x, y);
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const validationForEditForm = new FormValidator(config, editForm);
validationForEditForm.enableValidation();
const validationForAddForm = new FormValidator(config, addForm);
validationForAddForm.enableValidation();

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
popup.setEventListeners();


buttonElementEdit.addEventListener('click', () => {
  popupProfile.open();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
  validationForEditForm.resertValidation();
});

buttonElementAdd.addEventListener('click', () => {
  popupCard.open();
  validationForAddForm.resertValidation();
});

const popupProfile = new PopupWithForm('.popup_place_edit-button', {
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupProfile.close();
    inactivateButton();
  },
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm('.popup_place_add-button', {
  handleFormSubmit: (formData) => {
    cardsContainer.prepend(createCard(formData, '.card-template'));
    popupCard.close();
    inactivateButton();
  },
});
popupCard.setEventListeners();

const userInfo = new UserInfo('.profile__info-name', '.profile__info-job');
