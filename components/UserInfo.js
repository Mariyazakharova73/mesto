export default class UserInfo {
  constructor(nameSelector, informationSelector) {
    this._nameSelector = nameSelector;
    this._informationSelector = informationSelector;
    this._name = document.querySelector(nameSelector);
    this._information = document.querySelector(informationSelector);
  }

  getUserInfo() {
    const objUserInfo = {
      name: this._name.textContent,
      job: this._information.textContent,
    };
    return objUserInfo;
  }

  setUserInfo(d) {
    this._name.textContent = d.name;
    this._information.textContent = d.job;
  }
}
