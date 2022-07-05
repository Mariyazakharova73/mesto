import { Card } from './Card.js';
import { initialCards } from './index-photo.js';
import { FormValidator } from './FormValidator.js';
export const popupImage = document.querySelector('.popup_place_click-image');
export const imageInPopup = popupImage.querySelector('.popup__image');
const cardsContainer = document.querySelector('.gallery__cards');
const userName = document.querySelector('.profile__info-name');
const userJob = document.querySelector('.profile__info-job');
const buttonElementEdit = document.querySelector('.profile__edit-button');
const buttonElementAdd = document.querySelector('.profile__add-buttton');
const popupProfile = document.querySelector('.popup_place_edit-button');
const popupCard = document.querySelector('.popup_place_add-button');
const formElementEdit = document.editForm;
const nameInput = editForm.name;
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
const validationForEditForm = new FormValidator(config, editForm);
validationForEditForm.enableValidation();
const validationForAddForm = new FormValidator(config, addForm);
validationForAddForm.enableValidation();

function createCard(item, template) {
  const card = new Card(item, template);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item, '.card-template'));
});

export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function addUserInfo() {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
  }
};

function submitProfileForm(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function inactivateButton() {
  const button = formElementAdd.querySelector('.popup__form-button');
  button.setAttribute('disabled', true);
  button.classList.add('popup__form-button_inactive');
}

function submitCardForm(evt) {
  evt.preventDefault();
  const obj = {
    name: titleInput.value,
    link: linkInput.value,
  };
  cardsContainer.prepend(createCard(obj, '.card-template'));
  formElementAdd.reset();
  closePopup(popupCard);
  inactivateButton();
}

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

const closePopupByOverlay = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        closePopup(popupElement);
      }
    });
  });
};

closePopupByOverlay();
