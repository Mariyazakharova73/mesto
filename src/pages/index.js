import './../pages/index.css';
import { initialCards, config, buttonElementEdit, buttonElementAdd, nameInput, jobInput } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const validationForEditForm = new FormValidator(config, editForm);
validationForEditForm.enableValidation();
const validationForAddForm = new FormValidator(config, addForm);
validationForAddForm.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-47/',
  headers: {
    authorization: '55bfc6da-57f3-4fa7-807c-daa05221149b',
    'Content-Type': 'application/json',
  },
});

let userId;
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([user, cards]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    galleryCards.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

// function handleSubmitCard(data) {
//   //вызвать функцию, которая поменяет кнопку отправки формы
// api.createCard(data).then(res => {
//   const card = createCard(res)
//   galleryCards.setItem(card)
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally((err) => {
//   //вызываем функцию, которая вернет кнопку в начальное состояние. текстконтент
//   //параметром передаем кнопку и текст в функцию
//   //метод попап виз форм эта функция
// })
// }

//userId тот, кто создал карточку

//function createCard1 (data) {
//const card = new Card(data, x, userId)
//проверить, что userId совпадает с полем владельца карточки
//если это так, то показываем корзину
//если не так, то скрываем
//лайки проверить, что среди элементов есть элемент, который равен userId
//если так, то лайк закрашиваем, если нет, то пустое
//}

function createCard(obj) {
  const card = new Card(obj, '.card-template', {
    handleCardClick: (titleInPopupImage, linkInPopupImage) => {
      popupImage.open(titleInPopupImage, linkInPopupImage);
    },
    openPopupDeleteCard: () => {
      popupDeleteCard.open();
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const galleryCards = new Section(
  {
    renderer: (cardItem) => {
      const cardElement = createCard(cardItem);
      galleryCards.setItem(cardElement); //принимает DOM-элемент и добавляет его в контейнер
    },
  },
  '.gallery__cards'
);

const popupImage = new PopupWithImage({ popupSelector: '.popup_place_click-image' });
popupImage.setEventListeners();

buttonElementEdit.addEventListener('click', () => {
  popupProfile.open();
  //данные пользователя подставляет в форму при открытии
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
  validationForEditForm.resertValidation();
});

buttonElementAdd.addEventListener('click', () => {
  popupCard.open();
  validationForAddForm.resertValidation();
});

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_place_edit-button',
  handleFormSubmit: (formData) => {
    //принимает новые данные пользователя и добавляет их на страницу
    userInfo.setUserInfo(formData);
    // api
    //   .sendProfile(formData.name, formData.about)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    popupProfile.close();
  },
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm({
  popupSelector: '.popup_place_add-button',
  handleFormSubmit: (formData) => {
    console.log(formData);
    const cardElement = createCard(formData);
    galleryCards.setItem(cardElement);
    popupCard.close();
  },
});
popupCard.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: '.profile__info-name', profileJobSelector: '.profile__info-job' });


const popupDeleteCard = new Popup({
  popupSelector: '.popup_place_delete-button',
});
