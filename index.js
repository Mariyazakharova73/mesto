let popup = document.querySelector('.popup'); 
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__form-button');

function openPopup() {
  popup.classList.add('popup_opened');
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name'); 
let jobInput = formElement.querySelector('#job'); 
let name = document.querySelector('.profile__info-name'); 
let job = document.querySelector('.profile__info-job');
nameInput.setAttribute('value', name.textContent);
jobInput.setAttribute('value', job.textContent);

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
