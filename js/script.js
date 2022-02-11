"use strict";
let elLogoutBtn = document.querySelector(".logout");
let lokalToken = window.localStorage.getItem("token");
if (!lokalToken) {
  window.location.replace(index.html);
}
elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  window.location.replace("index.html");
});
