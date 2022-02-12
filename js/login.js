"use strict";
let elForm = document.querySelector(".form");
let elInputName = document.querySelector(".input__name");
let elInputPassword = document.querySelector(".input__password");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let nameValue = elInputName.value;
  let passwordValue = elInputPassword.value;
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: nameValue,
      password: passwordValue,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.token) {
        window.localStorage.setItem("token", data.token);

        window.location.replace("home.html");
      } else {
        alert("Iltimos qayta urinib koring");
      }
    });
});
