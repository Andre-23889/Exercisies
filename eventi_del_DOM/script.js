const page= document.documentElement;

const button= page.querySelector(".btn")
console.dir(button);

const body= page.querySelector("body")

button.addEventListener('click', event=>{
    console.log("something happen", event);
    body.classList.toggle("theme");
})

