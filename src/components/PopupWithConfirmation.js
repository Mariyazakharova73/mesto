import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, delCard }) {
    super({ popupSelector });
    this._form = this._popup.querySelector('.popup__form');
    this._delCard = delCard;
  }

  open(card) {
    console.log(card);
    //card это ли, получили при открытии попапа
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._delCard(this._card);
    });
  }
}
