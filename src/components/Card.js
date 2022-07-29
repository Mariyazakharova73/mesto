export default class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector('.gallery__card-image');
    this._like = this._element.querySelector('.button-like');
    this._setCardListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.gallery__card-heading').textContent = this._name;
    return this._element;
  }

  _deleteCard() {
    this._element.remove();
  }

  _addLike() {
    this._like.classList.toggle('button-like_active');
  }

  _setCardListeners() {
    this._element.querySelector('.gallery__button-delete').addEventListener('click', () => this._deleteCard());
    this._like.addEventListener('click', () => this._addLike());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
