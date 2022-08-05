export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._profileNameSelector = profileNameSelector;
    this._profileJobSelector = profileJobSelector;
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  //данные пользователя подставляет в форму при открытии
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    };
  }

  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(userData) {
    if (userData.name) {
      this._profileName.textContent = userData.name;
    } else {
      console.log(`Поле 'Имя' не содержит данных`);
    }
    if (userData.about) {
      this._profileJob.textContent = userData.about;
    } else {
      console.log(`Поле 'О себе' не содержит данных`);
    }
    if (userData.avatar) {
      this._profileAvatar.src = userData.avatar;
    } else {
      console.log(`Поле 'Ссылка на картинку' не содержит данных`);
    }
  }

  setUserAvatar(userData) {
    if (userData.avatar) {
      this._profileAvatar.src = userData.avatar;
    } else {
      console.log(`Поле 'Ссылка на картинку' не содержит данных`);
    }
  }
}
