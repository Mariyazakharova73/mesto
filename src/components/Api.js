export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfile() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
    }).then(this._getResponse);
  }

  sendProfile(name, about) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._getResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    }).then(this._getResponse);
  }

  sendNewCard(name, link) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._getResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getResponse);
  }
}
