import {Card} from './Card.js';
import {initialCards} from './index-photo.js';
// import {enableValidation} from './validate.js';
const cardsContainer = document.querySelector('.gallery__cards');
const userName = document.querySelector('.profile__info-name');
const userJob = document.querySelector('.profile__info-job');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-buttton');
const popupProfile = document.querySelector('.popup_place_edit-button');
const popupCard = document.querySelector('.popup_place_add-button');
const formElementEdit = document.editForm;
const nameInput = editForm.name;
const jobInput = editForm.job;
const formElementAdd = document.addForm;
const titleInput = addForm.title;
const linkInput = addForm.link;
const closeButtons = document.querySelectorAll('.popup__close');

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
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
  const card = new Card(obj, '.card-template');
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  formElementAdd.reset();
  closePopup(popupCard);
  inactivateButton();
}

editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  addUserInfo();
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

addButton.addEventListener('click', () => openPopup(popupCard));
formElementEdit.addEventListener('submit', submitProfileForm);
formElementAdd.addEventListener('submit', submitCardForm);

const closePopupByOverlay = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popupElement);
      }
    });
  });
};

closePopupByOverlay();

