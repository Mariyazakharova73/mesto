import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, deleteCardFromServer }) {
    super({ popupSelector });
    this._form = this._popup.querySelector('.popup__form');
    this._deleteCardFromServer = deleteCardFromServer;
  }

  open(card) {
    // console.log(card);
    //card это ли, получили при открытии попапа
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCardFromServer(this._card);
    });
  }
}
