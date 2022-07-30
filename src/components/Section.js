export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(x) {
    x.forEach((item) => {
     this._renderer(item);
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}


// массив не в конструктор, а в метод рендер итемс

// метод принимает массив и его парсит