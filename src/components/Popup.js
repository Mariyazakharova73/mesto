export default class Popup {
  constructor({ popupSelector } ) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._button = document.querySelector('.popup__form-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      console.log(this._button);
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = 'Сохранить'
      console.log(this._button);
    }
  }
}
