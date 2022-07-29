export default class Api {
  constructor(userName, job) {
    this._userName = userName;
    this._job = job;
  }

  getUserInfo() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-47/users/me', {
      headers: {
        authorization: '55bfc6da-57f3-4fa7-807c-daa05221149b',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        console.log(data);
        this._userName.textContent = data.name;
        this._job.textContent = data.about;
      });
  }

  // getInitialCards() {
  //   return fetch('https://mesto.nomoreparties.co/v1/cohort-47/cards', {
  //     headers: {
  //       authorization: '55bfc6da-57f3-4fa7-807c-daa05221149b'
  //     }
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       }

  //       // если ошибка, отклоняем промис
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //     });
  // }

  // другие методы работы с API
}
