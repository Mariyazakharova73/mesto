import Popup from './Popup.js';
import { imageInPopup, popupImageTitle, linkInput, titleInput } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  _getInputValues() {

    // this._formValues = {
    //   name: titleInput.value,
    //   link: linkInput.value,
    // }
    // достаём все элементы полей
    this._inputList = this._form.querySelectorAll('.popup__form-input');
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  }
}

//const obj = {
  //     name: titleInput.value,
  //     link: linkInput.value,
  //   };