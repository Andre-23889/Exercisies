let button= document.querySelectorAll(".btn");

button= button[0];
console.dir(button);

const body= document.querySelector("body");

button.addEventListener("click", event=> {
    body.classList.toggle("theme");
})