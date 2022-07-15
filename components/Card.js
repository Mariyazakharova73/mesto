import { imageInPopup, popupImageTitle } from '../utils/constants.js';
//import { openPopup } from '../utils/utils.js';
import Popup from '../components/Popup.js';

const popupImage = new Popup('.popup_place_click-image');
popupImage.setEventListeners();

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.gallery__card').cloneNode(true);
    return cardElement;
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._setCardListeners();
    this._cardImage = this._element.querySelector('.gallery__card-image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.gallery__card-heading').textContent = this._name;
    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }

  _addLike() {
    this._element.querySelector('.button-like').classList.toggle('button-like_active');
  }

  _addDataPopupImage() {
    imageInPopup.src = this._link;
    imageInPopup.alt = this._name;
    popupImageTitle.textContent = this._name;
  }

  // _handleOpenPopup() {
  //   openPopup(popupImage);
  // }

  _setCardListeners() {
    this._element.addEventListener('click', (evt) => {
      const el = evt.target;
      if (el.classList.contains('button-like')) {
        this._addLike();
      } else if (el.classList.contains('gallery__button-delete')) {
        this._deleteCard();
      } else if (el.classList.contains('gallery__card-image')) {
        popupImage.open();
        this._addDataPopupImage();
      }
    });
  }
}
