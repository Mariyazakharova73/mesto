export default class Card {
  constructor(data, cardSelector, userId, { handleCardClick, handleTrashClick, addLikeFromServer, deleteLikeFromServer }) {
    this._handleCardClick = handleCardClick;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._ownerId = data.owner._id;
    //обратить внимание на контекст this
    this._handleTrashClick = handleTrashClick;
    this._deleteLikeFromServer = deleteLikeFromServer;
    this._addLikeFromServer = addLikeFromServer;
    this._userId = userId;
  }

  _checkId() {
    if (this._ownerId === this._userId) {
      this._trash.classList.remove('gallery__button-delete_hidden');
    }
  }

  _isLiked() {
    this._likes.forEach((user) => {
      if (user._id === this._userId) {
        this.addLike();
      } else {
        this.deleteLike();
      }
    });
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.gallery__card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.gallery__card-image');
    this._like = this._element.querySelector('.button-like');
    this._trash = this._element.querySelector('.gallery__button-delete');
    this._number = this._element.querySelector('.button-like__number');
    this._setCardListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.gallery__card-heading').textContent = this._name;
    this._number.textContent = this._likes.length;
    this._checkId();
    this._isLiked();
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

  addLike() {
    this._like.classList.add('button-like_active');
  }

  deleteLike() {
    this._like.classList.remove('button-like_active');
  }

  _setCardListeners() {
    this._trash.addEventListener('click', () => this._handleTrashClick());

    this._like.addEventListener('click', () => {
      if (this._like.classList.contains('button-like_active')) {
        this._deleteLikeFromServer();
      } else {
        this._addLikeFromServer();
      }
    });
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  setCountLike(data) {
    this._number.textContent = data.likes.length;
  }
}
