const initialCards = [
  { name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const popupImage = document.querySelector('.popup_place_click-image');
const imageInPopup = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title')
const cardsContainer = document.querySelector('.gallery__cards');
const userName = document.querySelector('.profile__info-name');
const userJob = document.querySelector('.profile__info-job');
const buttonElementEdit = document.querySelector('.profile__edit-button');
const buttonElementAdd = document.querySelector('.profile__add-buttton');
const popupProfile = document.querySelector('.popup_place_edit-button');
const popupCard = document.querySelector('.popup_place_add-button');
const formElementEdit = document.editForm;
const nameInput = editForm.userName;
const jobInput = editForm.job;
const formElementAdd = document.addForm;
const titleInput = addForm.title;
const linkInput = addForm.link;
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__input-error_active',
};

export { initialCards, popupImage, imageInPopup, popupImageTitle, cardsContainer, userName, userJob, buttonElementEdit, buttonElementAdd, popupProfile, popupCard, formElementEdit, nameInput, jobInput, formElementAdd, titleInput, linkInput, config }