class FormValidator {
  constructor(obj, form) {
    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._form = form;
    // this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    console.log(this._inputList);
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.setAttribute('disabled', true);
    } else {
      // иначе сделай кнопку активной
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.removeAttribute('disabled');
    }
  };

  _showInputError = (inputElement, errorMessage) => {
    // Функция, которая добавляет класс с ошибкой
    // Находим элемент ошибки внутри самой функции
    const errorElement = this._form.querySelector(`.${this._inputSelector.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    // Функция, которая удаляет класс с ошибкой
    // Находим элемент ошибки
    const errorElement = this._form.querySelector(`.${this._inputSelector.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}

// const showInputError = (formElement, inputElement, errorMessage, obj) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(obj.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(obj.errorClass);
// };

// const hideInputError = (formElement, inputElement, obj) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(obj.inputErrorClass);
//   errorElement.classList.remove(obj.errorClass);
//   errorElement.textContent = '';
// };

// const isValid = (formElement, inputElement, obj) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, obj);
//   } else {
//     hideInputError(formElement, inputElement, obj);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement, obj) => {
//   // Если есть хотя бы один невалидный инпут
//   if (hasInvalidInput(inputList)) {
//     // сделай кнопку неактивной
//     buttonElement.classList.add(obj.inactiveButtonClass);
//     buttonElement.setAttribute('disabled', true);
//   } else {
//     // иначе сделай кнопку активной
//     buttonElement.classList.remove(obj.inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// };

// const setEventListeners = (formElement, obj) => {
//   const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
//   const buttonElement = formElement.querySelector(obj.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, obj);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement, obj);
//       toggleButtonState(inputList, buttonElement, obj);
//     });
//   });
// };

// const enableValidation = (obj) => {
//   const formList = Array.from(document.querySelectorAll(obj.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, obj);
//   });
// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__form-input',
//   submitButtonSelector: '.popup__form-button',
//   inactiveButtonClass: 'popup__form-button_inactive',
//   inputErrorClass: 'popup__form-input_type_error',
//   errorClass: 'popup__input-error_active',
// });

const form1 = new FormValidator(
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-button',
    inactiveButtonClass: 'popup__form-button_inactive',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__input-error_active',
  },
  editForm
);

const test = form1.enableValidation();

const form2 = new FormValidator(
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-button',
    inactiveButtonClass: 'popup__form-button_inactive',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__input-error_active',
  },
  addForm
);
