const name = document.querySelector('.profile__info-name');
const job = document.querySelector('.profile__info-job');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.popupForm;
const nameInput = popupForm.name;
const jobInput = popupForm.job;
const saveButton = popup.querySelector('.popup__form-button');
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
