fetch('https://praktikum.yandex.ru')
  .then((res) => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
  .then((data) => {
    console.log(data.user.name); // если мы попали в этот then, data — это объект
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
// ---------------------------------------------------------------
const quoteElement = document.querySelector('.quote');

function updateQuote() {
  fetch('https://api.kanye.rest')
    .then((res) => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
}

document.querySelector('.header__btn').addEventListener('click', updateQuote);
// ----------------------------------------------------------------
// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        addPostToDOM(document.querySelector('.container'), createPostMarkup(post));
      });
    });
}

getPosts();
// --------------------POST---------------------------------------
// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function createPost(newPost) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title, //
      body: newPost.body, //
    }),
    // и заголовки
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      addPostToDOM(document.querySelector('.container'), createPostMarkup(post));
    });
}

// обработчик сабмита формы
document.forms.post.addEventListener('submit', function (event) {
  event.preventDefault();
  const { title, text } = event.currentTarget.elements;
  createPost({
    title: title.value,
    body: text.value,
  });
});
//-----------------------------------------------------------------

const quoteElement = document.querySelector('div.quote');

fetch('https://api.kanye.rest')
  .then((res) => {
    if (res.ok) {
      return res.json();
    }

    /* отклоняем промис, чтобы перейти
    в блок catch, если сервер вернул ошибку */
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
  .then((data) => {
    quoteElement.textContent = data.quote;
  })
  .catch((err) => {
    console.log(err); // "Что-то пошло не так: ..."
  });

  //-------------------------------------------------------------------------

const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');

form.addEventListener('submit', function submit(e) {
  e.preventDefault();
  renderLoading(true);
  //запрос уходит на сервер при нажатии на кнопку
  search(form.elements.entity.value, form.elements.entityId.value)//ИНПУТЫ
    .then((res) => {
      if (res.ok) {
        //Если ответ успешный, следующий обработчик then получит объект ответа на вход
        return res.json();
      }
      return Promise.reject(res.status);//отклоняем промис, чтобы перейти в catch
    })
    //res - ОБЪЕКТ
    .then((res) => {
    renderResult(res.name)
      console.log(res)
    })
    .catch((err) => {
    renderError(`Ошибка: ${err}`)
      console.log(`Ошибка: ${err}`)
    })
  .finally(() => {
    renderLoading(false)
    });
});

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`) 
}

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  error.textContent = err;
  result.textContent = '';
}

function renderLoading(isLoading) {
  if (isLoading) {
    spinner.classList.add('spinner_visible');
    content.classList.add('content_hidden');
  } else {
    spinner.classList.remove('spinner_visible');
    content.classList.remove('content_hidden');
  }
} 