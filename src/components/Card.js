export default class Card {
  constructor(data, cardSelector, userId, { handleCardClick, openPopupDeleteCard }, deleteCardFromServer) {
    this._handleCardClick = handleCardClick;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes.length;
    this._cardSelector = cardSelector;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._userId = data.owner._id;
    this._deleteCardFromServer = deleteCardFromServer;
    this._deleteCard = this._deleteCard.bind(this);
  }

  _checkId() {
    if (this._userId === '8ee3c4ebefdf8ecffa7150ce') {
      this._element.querySelector('.gallery__button-delete').classList.remove('gallery__button-delete_hidden');
    }
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
    this._element.querySelector('.button-like__number').textContent = this._likes;
    this._checkId();
    return this._element;
  }

  _deleteCard() {
    this._deleteCardFromServer(this._id)
      .then((res) => {
        this._element.remove();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _addLike() {
    this._like.classList.toggle('button-like_active');
  }


  _setCardListeners() {
    // this._button.addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.gallery__button-delete').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.gallery__button-delete').addEventListener('click', () => this._openPopupDeleteCard());
    this._like.addEventListener('click', () => this._addLike());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
