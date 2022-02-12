"use strict";
const search = "JavaScript";
let elHeader = document.querySelector(".header__div");
let elLogoutBtn = document.querySelector(".logout");
let elList = document.querySelector(".main__list");
let elForm1 = document.querySelector(".form");
let inputBooks = document.querySelector(".input");
let elRuslt = document.querySelector(".result");
let elTemplate = document.querySelector(".template");
let xato =
  "Saytimizda xatolok bor biz uni tog'irlash maqsadida texmik ishlarni olib boryapmiz iltimos tog'ri chuning :)";

let lokalToken = window.localStorage.getItem("token");
if (!lokalToken) {
  window.location.replace(index.html);
}
elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  window.location.replace("index.html");
});
elForm1.addEventListener("submit", function (event) {
  event.preventDefault();
  let bookValue = inputBooks.value;
  // console.log(bookValue);
  search = bookValue;
  getBooks();
});
const getBooks = async function () {
  let respons = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}+terms`
  );
  let data = await respons.json();

  if (data.respons === true && data.search.lenght > 1) {
    reanderBooks(data.items, elList);
  }
  let arr1 = data.items;
  elRuslt.textContent = `Showing ${arr1.length} Result(s)`;

  arr1.forEach((element) => {
    try {
      // FOR GET ELEMENT
      let newItem = document.createElement("li");
      newItem.classList.add("main__items");
      let newDiv = document.createElement("div");
      newDiv.classList.add("dfdsfads");
      newItem.appendChild(newDiv);
      let newImg = document.createElement("img");
      newImg.setAttribute(
        "src",
        element.volumeInfo.imageLinks.smallThumbnail ||
          element.volumeInfo.imageLinks.thumbnail
      );
      newImg.classList.add("book__img");
      newImg.setAttribute("width", 201);
      newImg.setAttribute("height", 202);
      newDiv.appendChild(newImg);
      let newHead = document.createElement("h4");
      newHead.classList.add("book__head");
      // TEXT CONTENT
      newHead.textContent = element.volumeInfo.title;
      newItem.appendChild(newHead);
      let newDivFor = document.createElement("div");
      newDivFor.classList.add("item__descs");
      let newDesc = document.createElement("p");
      // TEXT CONTENT
      newDesc.textContent = element.volumeInfo.publishedDate;
      let newSecondDesc = document.createElement("p");
      newSecondDesc.textContent = element.volumeInfo.publisher;
      newDivFor.appendChild(newDesc);
      newDivFor.appendChild(newSecondDesc);
      newItem.appendChild(newDivFor);
      elList.appendChild(newItem);
      let divForButtons = document.createElement("div");
      divForButtons.classList.add("item__buttons", "d-flex");
      let buttonWarning = document.createElement("button");
      buttonWarning.classList.add("button", "button__warning");
      buttonWarning.textContent = "Bookmark";
      let buttonInfo = document.createElement("button");
      buttonInfo.classList.add("button", "button__info");
      buttonInfo.textContent = "More Info";
      divForButtons.appendChild(buttonWarning);
      divForButtons.appendChild(buttonInfo);
      newItem.appendChild(divForButtons);
      let buttonSecondary = document.createElement("button");
      buttonSecondary.classList.add("button", "button__secondary", "w-100");
      buttonSecondary.textContent = "Read";
      newItem.setAttribute("aria-hidden", "true");
      newItem.appendChild(buttonSecondary);
      newItem.setAttribute("data-aos", "flip-left");
      newItem.setAttribute("data-aos-easing", "ease-out-cubic");
      newItem.setAttribute("data-aos-duration", "2000");
    } catch (err) {
      alert(xato);
    }
  });
};
getBooks();

elList.addEventListener("click", function (evt) {
  evt.preventDefault();
});
