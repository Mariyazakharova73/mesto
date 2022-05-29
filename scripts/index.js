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

const popupEditButton = document.querySelector('.popup_place_edit-button');
const closeButton = popupEditButton.querySelector('.popup__close');
const saveButton = popupEditButton.querySelector('.popup__form-button');

const formElementEdit = document.editForm;
const nameInput = editForm.name;
const jobInput = editForm.job;

const popupAddButton = document.querySelector('.popup_place_add-button');
const closeButton2 = popupAddButton.querySelector('.popup__close');
const saveButton2 = popupAddButton.querySelector('.popup__form-button');

const cardImage = document.querySelector('.gallery__card-image');
const cardTitle = document.querySelector('.gallery__card-heading');

const formElementAdd = document.addForm;
const titleInput = addForm.title;
const linkInput = addForm.link;

// function addLike(element) {
//   element.querySelector('.button-like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('button-like_active');
//   });
// }

function createCard(x, y) {
  const cardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  cardElement.querySelector('.gallery__card-image').src = x;
  cardElement.querySelector('.gallery__card-heading').textContent = y;
  return cardElement;
}

// function addLike() {
//   cardWrapper.addEventListener('click', (evt) => {
//     const el = evt.target;
//     if (el.classList.contains('button-like')) {
//       el.classList.toggle('button-like_active');
//     }
//   });
// }

function watchCard(card) {
  card.addEventListener('click', (evt) => {
    const el = evt.target;
    if (el.classList.contains('button-like')) {
      el.classList.toggle('button-like_active');
    }
  });
}

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name);
  cardsContainer.append(cardElement);
  watchCard(cardElement);
});

function openPopup(popupElement) {
  if (popupElement === popupEditButton) {
    popupEditButton.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  } else if (popupElement === popupAddButton) {
    popupAddButton.classList.add('popup_opened');
  }
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupEditButton);
}

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const cardElement = createCard(linkInput.value, titleInput);
  cardsContainer.prepend(cardElement);
  watchCard(cardElement);
  addForm.reset();
  closePopup(popupAddButton);
}

editButton.addEventListener('click', () => openPopup(popupEditButton));
closeButton.addEventListener('click', () => closePopup(popupEditButton));
closeButton2.addEventListener('click', () => closePopup(popupAddButton));
addButton.addEventListener('click', () => openPopup(popupAddButton));
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', cardSubmitHandler);
