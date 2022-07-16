import Popup from './Popup.js';
import { imageInPopup, popupImageTitle } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor( popupSelector) {
    super(popupSelector);
    // this._link = '';
    // this._name = 'карточка на которую кликнули';
    }

  open(x, y) {
    super.open();
    // this._popup.classList.add('popup_opened');
    // document.addEventListener('keydown', super._handleEscClose);
    this._addDataPopupImage(x, y);
  }

  _addDataPopupImage(x, y) {
    imageInPopup.src = x;
    imageInPopup.alt = y;
    popupImageTitle.textContent = y;
  }
}
