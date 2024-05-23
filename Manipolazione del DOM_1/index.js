const page= document.documentElement;
const input= page.querySelector("input");
console.dir(input);
const ul= page.querySelector("ul")

const addProduct = () => {
 let data= input.value;
 console.log(data);
 let li= document.createElement("li")
 let check= document.createElement("input")
 li. innerText= data;
 check.setAttribute("type", "checkbox");
 ul.appendChild(li)
 li.appendChild(check)
};
