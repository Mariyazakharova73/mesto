const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardTemplate = document.querySelector('#card').content;
const cardContainer = document.querySelector('.gallery__cards');
initialCards.forEach((item) => {
  const cardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  cardElement.querySelector('.gallery__card-image').src = item.link;
  cardElement.querySelector('.gallery__card-heading').textContent = item.name;
  cardContainer.append(cardElement);
});


const userName = document.querySelector('.profile__info-name');
const userJob = document.querySelector('.profile__info-job');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-buttton');

const popupEditButton = document.querySelector('.popup_place_edit-button');
const closeButton = popupEditButton.querySelector('.popup__close');
const saveButton = popupEditButton.querySelectorAll('.popup__form-button');

const formElementEdit = document.editForm;
const nameInput = editForm.name;
const jobInput = editForm.job;

const popupAddButton = document.querySelector('.popup_place_add-button');
const closeButton2 = popupAddButton.querySelector('.popup__close');
const saveButton2 = popupAddButton.querySelectorAll('.popup__form-button');

const cardImage = document.querySelector('.gallery__card-image');
const cardTitle = document.querySelector('.gallery__card-heading');
const formElementAdd = document.addForm;
const titleInput = addForm.title;
const linkInput = addForm.link;


function openPopup(popupElement) { 
  if (popupElement === popupEditButton) {
  popupEditButton.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
} else if (popupElement === popupAddButton) {
  popupAddButton.classList.add('popup_opened');
}
};

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(popupEditButton);
};

function formSubmitHandler2(evt) {
  evt.preventDefault();
  cardImage.src = linkInput.value;
  cardTitle.textContent = titleInput.value;
  closePopup(popupAddButton);
};

editButton.addEventListener('click', () => openPopup(popupEditButton));
closeButton.addEventListener('click', () => closePopup(popupEditButton));
closeButton2.addEventListener('click', () => closePopup(popupAddButton));

addButton.addEventListener('click', () => openPopup(popupAddButton));

formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitHandler2);
































// function addcard(cardImage, cardTitle) {
//   const cardTemplate = document.querySelector('#card').content;//содержимое template
//   const cardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true); //клонировали li
  
//   cardElement.querySelector('.gallery__card-image').src = cardImage; //добавили в li src
//   cardElement.querySelector('.gallery__card-heading').textContent = cardTitle; //добавили название места;
//   const cardContainer = document.querySelector('.gallery__cards'); //ul
//   cardContainer.prepend(cardElement); //добавьте songElement в конец songsContainer
// }