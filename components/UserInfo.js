export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileNameSelector = profileNameSelector;
    this._profileJobSelector = profileJobSelector;
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
  }

  getUserInfo() {
    const objUserInfo = {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
    return objUserInfo;
  }

  setUserInfo(obj) {
    this._profileName.textContent = obj.name;
    this._profileJob.textContent = obj.job;
  }
}
