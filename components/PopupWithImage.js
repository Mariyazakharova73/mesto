import Popup from './Popup.js';
import { imageInPopup, popupImageTitle } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
  }

  open(titleInPopupImage, linkInPopupImage) {
    super.open();
    imageInPopup.src = linkInPopupImage;
    imageInPopup.alt = titleInPopupImage;
    popupImageTitle.textContent = titleInPopupImage;
  }
}
