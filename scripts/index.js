const initialCards = [
  {
    name: 'Архыз',
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
const cardTemplate = document.querySelector('#card').content;
const cardsContainer = document.querySelector('.gallery__cards');
const userName = document.querySelector('.profile__info-name');
const userJob = document.querySelector('.profile__info-job');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-buttton');
const popupProfile = document.querySelector('.popup_place_edit-button');
const closingPopupProfile = popupProfile.querySelector('.popup__close');
const popupCard = document.querySelector('.popup_place_add-button');
const closingPopupCard = popupCard.querySelector('.popup__close');
const popupImage = document.querySelector('.popup_place_click-image');
const closingPopupImage = popupImage.querySelector('.popup__close');
const cardImage = document.querySelector('.gallery__card-image');
const cardTitle = document.querySelector('.gallery__card-heading');
const formElementEdit = document.editForm;
const nameInput = editForm.name;
const jobInput = editForm.job;
const formElementAdd = document.addForm;
const titleInput = addForm.title;
const linkInput = addForm.link;

function createCard(x, y) {
  const cardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  cardElement.querySelector('.gallery__card-image').src = x;
  cardElement.querySelector('.gallery__card-heading').textContent = y;
  return cardElement;
}

function watchCard(card) {
  card.addEventListener('click', (evt) => {
    const el = evt.target;
    if (el.classList.contains('button-like')) {
      el.classList.toggle('button-like_active');
    } else if (el.classList.contains('gallery__button-delete')) {
      card.remove();
    } else if (el.classList.contains('gallery__card-image')) {
      openPopup(popupImage);
      popupImage.querySelector('.popup__image').src = el.src;
      const parent = el.closest('.gallery__card');
      popupImage.querySelector('.popup__image-title').textContent = parent.querySelector('.gallery__card-heading').textContent;
    }
  });
}

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name);
  cardsContainer.append(cardElement);
  watchCard(cardElement);
});

function openPopup(popupElement) {
  if (popupElement === popupProfile) {
    popupProfile.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  } else if (popupElement === popupCard) {
    popupCard.classList.add('popup_opened');
  } else if (popupElement === popupImage) {
    popupImage.classList.add('popup_opened');
  }
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const cardElement = createCard(linkInput.value, titleInput.value);
  cardsContainer.prepend(cardElement);
  watchCard(cardElement);
  addForm.reset();
  closePopup(popupCard);
}

editButton.addEventListener('click', () => openPopup(popupProfile));
closingPopupProfile.addEventListener('click', () => closePopup(popupProfile));
addButton.addEventListener('click', () => openPopup(popupCard));
closingPopupCard.addEventListener('click', () => closePopup(popupCard));
closingPopupImage.addEventListener('click', () => closePopup(popupImage));
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', cardSubmitHandler);
