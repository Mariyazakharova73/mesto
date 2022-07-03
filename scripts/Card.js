import { openPopup } from './index.js';
const popupImage = document.querySelector('.popup_place_click-image');
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
    this._element.querySelector('.gallery__card-image').src = this._link;
    this._element.querySelector('.gallery__card-image').alt = this._name;
    this._element.querySelector('.gallery__card-heading').textContent = this._name;
    return this._element;
  }

  _deleteCard() {
    //li gallery__card
    this._element.remove();
  }

  _addLike() {
    //button-like
    this._element.querySelector('.button-like').classList.toggle('button-like_active');
  }

  _addDataPopupImage() {
    //gallery__card-image
    popupImage.querySelector('.popup__image').src = this._link;
    popupImage.querySelector('.popup__image').alt = this._name;
    popupImage.querySelector('.popup__image-title').textContent = this._name;
  }

  _handleOpenPopup() {
    openPopup(popupImage);
  }

  _setCardListeners() {
    this._element.addEventListener('click', (evt) => {
      const el = evt.target;
      if (el.classList.contains('button-like')) {
        this._addLike();
      } else if (el.classList.contains('gallery__button-delete')) {
        this._deleteCard();
      } else if (el.classList.contains('gallery__card-image')) {
        this._handleOpenPopup();
        this._addDataPopupImage();
      }
    });
  }
}