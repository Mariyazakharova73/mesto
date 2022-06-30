const cardTemplate = document.querySelector('#card').content;
const cardsContainer = document.querySelector('.gallery__cards');
const userName = document.querySelector('.profile__info-name');
const userJob = document.querySelector('.profile__info-job');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-buttton');
const popupProfile = document.querySelector('.popup_place_edit-button');
const popupCard = document.querySelector('.popup_place_add-button');
const popupImage = document.querySelector('.popup_place_click-image');
const cardImage = document.querySelector('.gallery__card-image');
const cardTitle = document.querySelector('.gallery__card-heading');
const formElementEdit = document.editForm;
const nameInput = editForm.name;
const jobInput = editForm.job;
const formElementAdd = document.addForm;
const titleInput = addForm.title;
const linkInput = addForm.link;
const closeButtons = document.querySelectorAll('.popup__close');

function createCard(link, cardName) {
  const cardElement = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  cardElement.querySelector('.gallery__card-image').src = link;
  cardElement.querySelector('.gallery__card-image').alt = cardName;
  cardElement.querySelector('.gallery__card-heading').textContent = cardName;
  return cardElement;
}

function addLike(element) {
  element.classList.toggle('button-like_active');
}

function deleteCard(card) {
  card.remove();
}

function addDataPopupImage(element) {
  popupImage.querySelector('.popup__image').src = element.src;
  const parent = element.closest('.gallery__card');
  const title = parent.querySelector('.gallery__card-heading').textContent;
  popupImage.querySelector('.popup__image').alt = title;
  popupImage.querySelector('.popup__image-title').textContent = title;
}

function setCardListeners(card) {
  card.addEventListener('click', (evt) => {
    const el = evt.target;
    if (el.classList.contains('button-like')) {
      addLike(el);
    } else if (el.classList.contains('gallery__button-delete')) {
      deleteCard(card);
    } else if (el.classList.contains('gallery__card-image')) {
      openPopup(popupImage);
      addDataPopupImage(el);
    }
  });
}

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name);
  cardsContainer.append(cardElement);
  setCardListeners(cardElement);
});

function openPopup(popupElement) {
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
  const cardElement = createCard(linkInput.value, titleInput.value);
  cardsContainer.prepend(cardElement);
  setCardListeners(cardElement);
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
