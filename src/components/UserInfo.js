export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileNameSelector = profileNameSelector;
    this._profileJobSelector = profileJobSelector;
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
  }

  //данные пользователя подставляет в форму при открытии
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    }
  }

  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(obj) {
    this._profileName.textContent = obj.name;
    this._profileJob.textContent = obj.about;
    //аватар?????
  }
}
