const mainURL = "https://jsonplaceholder.typicode.com/";
let limit = 10;

const posts = document.querySelector("#posts");
const root = document.querySelector("#root");
const pagination = document.querySelector("#pagination");
let boxContent = document.querySelector(".box-content");
let content = document.querySelector("#content");
let commits = document.querySelector("#commits");
let todos = document.querySelector("#todos");
let albums = document.querySelector("#albums");
let photos = document.querySelector("#photos");
let users = document.querySelector("#users");

let postsUrl = "posts";
const getData = async (page, arg) => {
  const response = await fetch(
    `${mainURL}${arg}?_limit=${limit}&_page=${page}`
  );
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
    result: data,
    total: headers.get("x-total-count") || null,
  };
};

let pagesCounForpost;
posts.addEventListener("click", () => {
  let data = getData(1, postsUrl);
  content.innerHTML = "";
  pagination.innerHTML = "";
  content.innerHTML = "";
  createPosts(data);
  getPagesNew(pagesCounForpost, createPosts, postsUrl);
});

function createPosts(obj) {
  obj.then((res) =>
    [...res.result].forEach((el, i) => {
      let post = document.createElement("div");
      post.classList.add("item-style");
      post.innerHTML = ` <p>№${el.id}. <p/> 
    <div>title: ${el.title} <div/> <div> body: ${el.body}<div/>`;
      content.append(post);
    })
  );
}

let todosUrl = "todos";
let pagesCount;
todos.addEventListener("click", () => {
  let data = getData(1, todosUrl);
  content.innerHTML = "";
  pagination.innerHTML = "";
  createTodos(data);
  getPagesNew(pagesCount, createTodos, todosUrl);
});

function createTodos(obj) {
  obj.then((res) =>
    [...res.result].forEach((el, i) => {
      let todo = document.createElement("div");
      todo.classList.add("item-style");
      todo.innerHTML = ` <p>№${el.id}. <p/> 
      <div>title: ${el.title} <div/>`;
      content.append(todo);
    })
  );
}

function getPagesNew(pagesCount, funcContent, contentUrl) {
  let pagesQty = getData(1, contentUrl);
  pagesQty.then((res) => {
    let pagesCount = res.total / 10;
    pagination.innerHTML = "";
    getPaginatop(pagesCount, funcContent, contentUrl);
  });
}

function getPaginatop(pages, funcContent, contentUrl) {
  let startPage = 1;
  let prev = document.createElement("div");
  prev.classList.add("pag-btn-style");
  prev.textContent = "< пред. ";
  pagination.append(prev);

  let p = document.createElement("div");
  p.classList.add("pag-btn-style");
  p.textContent = `${startPage} стр. из ${pages}`;
  pagination.append(p);

  let next = document.createElement("div");
  next.classList.add("pag-btn-style");
  next.textContent = " след. >";
  pagination.append(next);

  next.addEventListener("click", () => {
    content.innerHTML = "";
    startPage++;
    p.textContent = ` ${startPage} стр. из ${pages} `;
    let obj = getData(startPage, contentUrl);
    funcContent(obj);
  });

  prev.addEventListener("click", () => {
    content.innerHTML = "";
    startPage--;
    p.textContent = ` ${startPage} стр. из ${pages} `;
    let obj = getData(startPage, contentUrl);
    funcContent(obj);
  });
}

let commitsUrl = "comments";
let pagesComm;
commits.addEventListener("click", () => {
  let data = getData(1, commitsUrl);
  content.innerHTML = "";
  pagination.innerHTML = "";
  createCommit(data);
  getPagesNew(pagesComm, createCommit, commitsUrl);
});

function createCommit(obj) {
  obj.then((res) =>
    [...res.result].forEach((el, i) => {
      let comm = document.createElement("div");
      comm.classList.add("item-style");
      comm.innerHTML = `<div>№${el.id}</div><div>name: ${el.name}</div> <div>email: ${el.email}</div> <div>body: ${el.body}</div> `;
      content.append(comm);
    })
  );
}

let albumsUrl = "albums";
let pagesAlboms;
albums.addEventListener("click", () => {
  let data = getData(1, albumsUrl);
  content.innerHTML = "";
  pagination.innerHTML = "";
  createAlb(data);
  getPagesNew(pagesAlboms, createAlb, albumsUrl);
});

function createAlb(obj) {
  obj.then((res) =>
    [...res.result].forEach((el, i) => {
      let alb = document.createElement("div");
      alb.classList.add("item-style");
      alb.innerHTML = `<div>Album: №${el.id}</div><div>title: ${el.title}</div>`;
      content.append(alb);
    })
  );
}

let photoUrl = "photos";
let pagesPhoto;
photos.addEventListener("click", () => {
  let data = getData(1, photoUrl);
  content.innerHTML = "";
  pagination.innerHTML = "";
  createPhotos(data);
  getPagesNew(pagesPhoto, createPhotos, photoUrl);
});

function createPhotos(obj) {
  obj.then((res) =>
    [...res.result].forEach((el, i) => {
      let photo = document.createElement("div");
      photo.classList.add("item-style");
      photo.innerHTML = `<div><a href=${el.url} target="_blank">Открыть оригинал</a>
    <img width="70px" height='70px' src=${el.url}><img></div> <div>title: ${el.title}</div> <div>thumbnailUrl: ${el.thumbnailUrl}</div>`;
      content.append(photo);
    })
  );
}
