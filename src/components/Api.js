class Api {
  constructor(options) {
    
  }

  // get()

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-47/cards', {
      headers: {
        authorization: '55bfc6da-57f3-4fa7-807c-daa05221149b'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  // другие методы работы с API
}