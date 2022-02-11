"use strict";
const search = "ielts";
let elHeader = document.querySelector(".header__div");
let elLogoutBtn = document.querySelector(".logout");
let elList = document.querySelector(".main__list");
let inputBooks = document.querySelector(".input");
let elRuslt = document.querySelector(".result");
let elTemplate = document.querySelector(".template");

let lokalToken = window.localStorage.getItem("token");
if (!lokalToken) {
  window.location.replace(index.html);
}
elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  window.location.replace("index.html");
});

elHeader.addEventListener("click", function (event) {
  event.preventDefault();
  let booksValue = inputBooks.value;
  inputBooks.innerHTML = "";
});
let request = fetch(
  "https://www.googleapis.com/books/v1/volumes?q=search+ielts"
)
  .then((res) => res.json())
  .then((data) => data);

// const reanderBooks = function (arr, element) {
//   arr.forEach((element) => {
//     const clonedBookTemplate = elTemplate.cloneNode(true);
//     clonedBookTemplate.querySelector(".book__img").src = element;
//   });
//   console.log(element);
// };
// reanderBooks();

const getBooks = async function () {
  let respons = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}+terms`
  );
  let data = await respons.json();

  if (data.respons === true && data.search.lenght > 1) {
    reanderBooks(data.items, elList);
  }
  let arr1 = data.items;
  // console.log(arr1);
  arr1.forEach((element) => {
    let newItem = document.createElement("li");
    newItem.classList.add("main__items");
    let newDiv = document.createElement("div");
    newDiv.classList.add("dfdsfads");
    newItem.appendChild(newDiv);
    let newImg = document.createElement("img");
    newImg.classList.add("book__img");
    newImg.setAttribute("width", 201);
    newImg.setAttribute("height", 202);
    newDiv.appendChild(newImg);
    let newHead = document.createElement("h4");
    let newArr = arr1.slice();
    newItem.appendChild(newHead);
    console.log(newArr);
    newHead.textContent = newArr.id;
    // console.log(element);
    // newHead.textContent = arr1.volumeInfo.
    elList.appendChild(newItem);
  });
  // let html = `<li class="main__items">
  //             <div class="dfdsfads">
  //               <img class="book__img" src="./images/item.png" alt="" width="201" height="202" />
  //             </div>
  //             <h4>Python</h4>
  //             <div class="item__descs">
  //               <p>David M. Beazley</p>
  //               <p>2009</p>
  //             </div>
  //             <div class="item__buttons d-flex">
  //               <button class="button button__warning">Bookmark</button>
  //               <button class="button button__info">More Info</button>
  //             </div>
  //             <button class="button button__secondary w-100">Read</button>
  //           </li>`;
  // elList.insertAdjacentHTML("beforeend", html);

  // console.log(data);
};
getBooks();
