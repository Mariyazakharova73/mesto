//Класс Section будет решать отдельную задачу — вставку элементов в разметку.
// В конструкторе:
// Массив данных, которые потребуются для перебора. Сейчас это будет массив с данными карточек чата messageList.
// CSS-селектор контейнера. В него мы будем вставлять элементы разметки.
// renderItems — перебирает массив данных _initialArray. Вызывает для каждого элемента массива метод setItem

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
     this._renderer(item);
    });
  }

  setItem(element) {
    this._container.append(element);
  }
}