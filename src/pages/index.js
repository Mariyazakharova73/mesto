import './../pages/index.css'
import { initialCards, config, cardsContainer, buttonElementEdit, buttonElementAdd, nameInput, jobInput } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';

function createCard(item, template) {
  const card = new Card(item, template, {
    handleCardClick: (titleInPopupImage, linkInPopupImage) => {
      popupImage.open(titleInPopupImage, linkInPopupImage);
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

const popup = new Popup({ popupSelector: '.popup' });
popup.setEventListeners();

const popupImage = new PopupWithImage({ popupSelector: '.popup_place_click-image' });
popupImage.setEventListeners();

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

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_place_edit-button',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupProfile.close();
  },
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: '.popup_place_add-button',
  handleFormSubmit: (formData) => {
    cardsContainer.prepend(createCard(formData, '.card-template'));
    popupCard.close();
    popupCard.inactivateButton();
  },
});
popupCard.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: '.profile__info-name', profileJobSelector: '.profile__info-job' });
