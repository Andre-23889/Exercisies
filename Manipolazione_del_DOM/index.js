const page= document.documentElement;
const input= page.querySelector("input");
console.dir(input);
const ul= page.querySelector("ul")



const addProduct = () => {
  let data= input.value;
  console.log(data);
  let task= document.createElement("li");
  task.innerText= data;
  ul.appendChild(task);
};

