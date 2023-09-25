class Service {
    _apiBase = 'https://jsonplaceholder.typicode.com';
  
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
      return res;
    };
  
    getResourcesWithLimit = async (resourceName, page = 1, limit = 10) => {
      const response = await this.getResource(`/${resourceName}/?_limit=${limit}&_page=${page}`);
      const headers = new Map(response.headers);
      const data = await response.json();
      return {
        data,
        total: headers.get('x-total-count') || null,
      };
    };
  
    getItem = async (itemName, id) => {
      const data = await this.getResource(`/${itemName}/${id}/`);
      return data.json();
    };
  }
  
  class View {
    createItem(itemName = 'post', item) {
      switch (itemName) {
        case 'posts':
          this.createPost(item);
          break;
        case 'comments':
          this.createComment(item);
          break;
        case 'photos':
          this.createPhoto(item);
          break;
        case 'todos':
          this.createTodo(item);
      }
    }
  
    createPost({ id, title, body }) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
          <div class="item_number"><h3>Post: ${id}</h3></div>
            <div class="item_body">
              <div class="title"><span>Title:</span> ${title}</div>
              <div class="info"><span>Info:</span> ${body}</div>
          </div>
      `;
      list.appendChild(item);
    }
  
    createComment({ id, name, email, body }) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
          <div class="item_number"><h3>Comment: ${id}</h3>\xa0</div>
          <div class="item_body">
            <div class="name"><span>Name:</span> ${name}</div>
            <div class="Email"><span>Email:</span> ${email}</div>
            <div class="info"><span>Info:</span> ${body}</div>
          </div>
      `;
      list.appendChild(item);
    }
  
    createPhoto({ id, title, url }) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
          <div class="item_number"><h3>Photo: ${id}</h3></div>
            <div class="item_body">
              <div class="title"><span>Title:</span> ${title}</div>
              <div class="info url"><span>URL:</span> <a>${url}</a></div>
          </div>
      `;
      list.appendChild(item);
    }
  
    createTodo({ id, title, completed }) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.classList.add(`${completed ? 'completed' : 'incomleted'}`);
      item.innerHTML = `
          <div class="item_number"><h3>Case: ${id}</h3></div>
            <div class="item_body">
              <div class="title"><span>Title:</span> ${title}</div>
              <div class="info"><span>Completed:</span> ${completed}</div>
          </div>
      `;
      list.appendChild(item);
    }
  
    clearList() {
      list.innerHTML = '';
    }
  
    clearPaginator() {
      paginator.innerHTML = '';
    }
  
    setViewPagination(page, lastId, countItemsOnPage = 10) {
      const lastPage = Math.ceil(+lastId / countItemsOnPage);
      paginator.innerHTML = `
          <a href="${page - 1 ? page - 1 : 1}">предыдущаяя</a>
              ${page < 3 ? '' : '<a href="1">1'}
              ${page < 4 ? '' : '</a><span>...</span>'}
              ${page < 2 ? '' : `<a href="${page - 1}">${page - 1}</a>`}
              <a href="${page}" class="current-page">${page}</a>
              ${page > lastPage - 2 ? '' : `<a href="${page + 1}">${page + 1}</a>`}
              ${page > lastPage - 3 ? '' : '<span>...</span>'}
              ${page > lastPage - 1 ? '' : `<a href="${lastPage}">${lastPage}</a>`}
          <a href="${page + 1 < lastPage ? page + 1 : lastPage}">следующаяя</a>
        `;
    }
  }
  
  const view = new View();
  const service = new Service();
  
  const div = document.querySelector('.container');
  const menu = div.children[0];
  const list = div.children[1];
  const paginator = div.children[2];
  
  function updateState(state) {
    view.clearList();
    view.clearPaginator();
    if (!state) return;
    if (!state.pageNumber) {
      state.pageNumber = 1;
    }
    service.getResourcesWithLimit(state.page, state.pageNumber).then((res) => {
      res.data.forEach((item) => {
        view.createItem(state.page, item);
      });
      view.setViewPagination(state.pageNumber, res.total);
    });
  }
  
  let lastCurrentPage;
  menu.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') return;
    lastCurrentPage?.classList.remove('current-page');
    e.target.classList.add('current-page');
    lastCurrentPage = e.target;
    let state = {
      page: e.target.getAttribute('href'),
    };
    history.pushState(state, '', state.page + '?/page-1');
    updateState(state);
    e.preventDefault();
  });
  
  paginator.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') return;
    let state = {
      page: location.href.match(/comments|posts|photos|todos/gm)[0],
      pageNumber: +e.target.getAttribute('href'),
    };
    history.pushState(state, '', `?/page-${state.pageNumber}`);
    updateState(state);
    e.preventDefault();
  });
  
  list.addEventListener('click', (e) => {
    view.clearList();
    view.clearPaginator();
    item = e.target.closest('.item');
    let id = +item.children[0].innerText.match(/\d+/)[0];
    itemName = location.href.match(/comments|posts|photos|todos/gm)[0];
    service.getItem(itemName, id).then((res) => {
      const btn = document.createElement('button');
      btn.classList.add('back');
      btn.innerText = 'back';
      btn.addEventListener('click', (e) => {
        history.go(-1);
        btn.remove();
      });
      menu.appendChild(btn);
      view.createItem(itemName, res);
    });
    let state = {
      page: itemName,
    };
    history.pushState(state, '', `?/item-${id}`);
  });
  
  window.addEventListener('popstate', (e) => {
    updateState(e.state);
  });