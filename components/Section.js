//Класс Section будет решать отдельную задачу — вставку элементов в разметку.
// В конструкторе:
// Массив данных, которые потребуются для перебора. Сейчас это будет массив с данными карточек чата messageList.
// CSS-селектор контейнера. В него мы будем вставлять элементы разметки.
// renderItems — перебирает массив данных _initialArray. Вызывает для каждого элемента массива метод setItem

//ЗАВИСИТ ОТ КЛАССА Card!!!!!!!!!!!!!!!!!!!!
export default class Section {
  constructor({ data, renderer }, containerSelector) {
    //data МАССИВ
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      //создадим экземпляры классов
      //const cardElement = createCard(item, '.card-template');
      //Вставим разметку на страницу,
      //используя метод setItem класса Section
     //this.setItem(cardElement);
     this._renderer(item);
    });
  }

  setItem(element) {
    // setItem — принимает параметр element и вставляет его в контейнер методом append.
    this._container.append(element);
  }
}

// function createCard(item, template) {
//   const card = new Card(item, template);
//   const cardElement = card.generateCard();
//   return cardElement;
// }

