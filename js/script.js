"use strict";
let elHeader = document.querySelector(".header__div");
let elLogoutBtn = document.querySelector(".logout");
let inputBooks = document.querySelector(".input");
let elRuslt = document.querySelector(".result");

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
  .then((data) => console.log(data));
