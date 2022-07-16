import Popup from './Popup.js';
import { imageInPopup, popupImageTitle } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor( popupSelector) {
    super(popupSelector);
    }

  open(x, y) {
    super.open();
    this._addDataPopupImage(x, y);
  }

  _addDataPopupImage(x, y) {
    imageInPopup.src = x;
    imageInPopup.alt = y;
    popupImageTitle.textContent = y;
  }
}
