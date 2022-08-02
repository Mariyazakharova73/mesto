export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(arr) {
    arr.forEach((item) => {
     this._renderer(item);
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}