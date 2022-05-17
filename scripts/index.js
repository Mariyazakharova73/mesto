const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__form-button');
const formElement = document.popupForm;
const nameInput = popupForm.name;
const jobInput = popupForm.job;
const name = document.querySelector('.profile__info-name');
const job = document.querySelector('.profile__info-job');
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
};
function closePopup() {
  popup.classList.remove('popup_opened');
};
function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
};
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
