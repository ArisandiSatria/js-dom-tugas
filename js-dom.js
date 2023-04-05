// Section 2 - 4
// Contoh dan Usecase
const iniId = document.getElementById("iniId");
console.log(iniId);

const iniClass = document.querySelector(".iniClass");
console.log(iniClass.parentNode);

iniClass.textContent = "Halooo";

const div = document.createElement("div");
div.innerHTML = "<span>Ini span</span>";
document.body.appendChild(div);

// Section 4 - 6
// Contoh dan Usecase
const image = document.getElementById("image");
console.log(image.getAttribute("alt"));

image.classList.add("new-class");

console.log(image.hasAttribute("src"));

// Section 7 - 8
// Contoh dan Usecase
const btn = document.querySelector("#btn");
btn.addEventListener("mouseover", () => {
  console.log("Button hovered!");
});

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Page not reloaded!");
});
