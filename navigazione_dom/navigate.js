const page= document.documentElement;

const ul= page.querySelector("ul")

console.log(ul);

console.group("request");

const body= ul.parentElement;

console.log(body);

const list= ul.children;

const child_2= list[1];

console.log(child_2.innerHTML);

const child_3= child_2.nextElementSibling;

console.log(child_3.innerHTML);

const child_1= child_2.previousElementSibling;

console.log(child_1.innerHTML);

console.groupEnd();

