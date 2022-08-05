import './../pages/index.css';
import { config, buttonElementEdit, buttonElementAdd, nameInput, jobInput, buttonEditAvatar } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const validationForEditForm = new FormValidator(config, editForm);
validationForEditForm.enableValidation();

const validationForAddForm = new FormValidator(config, addForm);
validationForAddForm.enableValidation();

const validationForEditAvatarForm = new FormValidator(config, editAvatarForm);
validationForEditAvatarForm.enableValidation();

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
    //принимает новые данные пользователя и добавляет их на страницу
    userInfo.setUserInfo(user);
    //для каждого элемента массива создает карточку
    section.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(obj) {
  const card = new Card(obj, '.card-template', userId, {
    //открывает попап с картинкой
    handleCardClick: (titleInPopupImage, linkInPopupImage) => popupImage.open(titleInPopupImage, linkInPopupImage),
    //открывает попап удаления
    handleTrashClick: () => popupDeleteCard.open(card),
    addLikeFromServer: () =>
      api
        .addLike(obj._id)
        .then((res) => {
          card.setCountLike(res);
          card.addLike();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        }),
    deleteLikeFromServer: () =>
      api
        .deleteLike(obj._id)
        .then((res) => {
          card.setCountLike(res);
          card.deleteLike();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        }),
  });

  const cardElement = card.generateCard();
  return cardElement;
}

//для каждого элемента массива создает карточку
const section = new Section(
  {
    renderer: (cardItem) => {
      const cardElement = createCard(cardItem);
      section.setItem(cardElement); //принимает DOM-элемент и добавляет его в контейнер
    },
  },
  config.cardContainerSelector
);

const popupImage = new PopupWithImage({ popupSelector: config.popupImageSelector });
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

buttonEditAvatar.addEventListener('click', () => {
  popupAvatar.open();
  validationForEditAvatarForm.resertValidation();
});

//ПРОФИЛЬ
const popupProfile = new PopupWithForm({
  popupSelector: config.popupProfileSelector,
  handleFormSubmit: (formData) => {
    popupProfile.renderLoading(true, 'Сохранение...');
    api
      .sendProfile(formData.name, formData.about)
      .then((res) => {
        //принимает новые данные пользователя и добавляет их на страницу
        userInfo.setUserInfo(res);
        popupProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfile.renderLoading(false);
      });
  },
});
popupProfile.setEventListeners();

//КАРТОЧКА
const popupCard = new PopupWithForm( {
  popupSelector: config.popupCardSelector,
  handleFormSubmit: (formData) => {
    popupCard.renderLoading(true, 'Создание...');
    api
      .sendNewCard(formData.name, formData.link)
      .then((res) => {
        const card = createCard(res);
        // принимает DOM-элемент и добавляет его в контейнер
        section.setItem(card);
        popupCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupCard.renderLoading(false);
      });
  },
});
popupCard.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: config.profileNameSelector, profileJobSelector: config.profileJobSelector, profileAvatarSelector: config.profileAvatarSelector });

//АВАТАР
const popupAvatar = new PopupWithForm({
  popupSelector: config.popupAvatarSelector,
  handleFormSubmit: (formData) => {
    popupAvatar.renderLoading(true, 'Сохранение...');
    api
      .sendAvatar(formData.link)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupAvatar.renderLoading(false);
      });
  },
});
popupAvatar.setEventListeners();

//Удаление карточки
const popupDeleteCard = new PopupWithConfirmation({
  popupSelector: config.popupDeleteCardSelector,
  deleteCardFromServer: (card) =>
    api
      .deleteCard(card._cardId)
      .then(() => {
        card.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      }),
});
popupDeleteCard.setEventListeners();
