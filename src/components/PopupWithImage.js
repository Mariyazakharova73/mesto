import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({popupSelector});
    this._imageInPopup = this._popup.querySelector('.popup__image');
    this._popupImageTitle = this._popup.querySelector('.popup__image-title');
  }

  open(titleInPopupImage, linkInPopupImage) {
    super.open();
    this._imageInPopup.src = linkInPopupImage;
    this._imageInPopup.alt = titleInPopupImage;
    this._popupImageTitle.textContent = titleInPopupImage;
  }
}
