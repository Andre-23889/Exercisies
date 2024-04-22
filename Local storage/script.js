const input= document.querySelectorAll("input");
console.log(input);

const owner= document.querySelector(".title-name");
console.log(owner);
 

const name= input[1];
name.addEventListener("keydown", key=>{
    console.log(key.key);
    setTimeout(()=>{owner.innerText=name.value},200);
})

const button= document.querySelector("button")

button.addEventListener("click", save=>{
    localStorage.setItem("email", input[0].value);
    localStorage.setItem("name", input[1].value);
    localStorage.setItem("surname", input[2].value);
})
