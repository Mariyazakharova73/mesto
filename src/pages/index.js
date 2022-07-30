import './../pages/index.css';
import { initialCards, config, buttonElementEdit, buttonElementAdd, nameInput, jobInput, userJob, userName } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const validationForEditForm = new FormValidator(config, editForm);
validationForEditForm.enableValidation();
const validationForAddForm = new FormValidator(config, addForm);
validationForAddForm.enableValidation();


const api = new Api( {
  url: 'https://mesto.nomoreparties.co/v1/cohort-47/',
  headers: {
    authorization: '55bfc6da-57f3-4fa7-807c-daa05221149b',
    'Content-Type': 'application/json',
  },
});

api
  .getUserInfo()
  .then((result) => {
    userName.textContent = result.name;
    userJob.textContent = result.about;
  })
  .catch((err) => {
    console.log(err);
  });

  
//---------------------------------------------------------------------------
api
  .getInitialCards()
  .then((result) => {
   galleryCards.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  }); 






function createCard(item, template) {
  const card = new Card(item, template, {
    handleCardClick: (titleInPopupImage, linkInPopupImage) => {
      popupImage.open(titleInPopupImage, linkInPopupImage);
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const galleryCards = new Section(
  {
    // data: arr,
    renderer: (cardItem) => {
      const cardElement = createCard(cardItem, '.card-template');
      galleryCards.setItem(cardElement); //принимает DOM-элемент и добавляет его в контейнер
    },
  },
  '.gallery__cards'
);

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
    const cardElement = createCard(formData, '.card-template');
    galleryCards.setItem(cardElement);
    popupCard.close();
  },
});
popupCard.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: '.profile__info-name', profileJobSelector: '.profile__info-job' });
