const page= document.documentElement;

const body= page.querySelector("body");

const listParagraph= body.querySelectorAll(".paragrafo");

console.log(listParagraph);

const ul= body.children[4];
console.log(ul);

const third= ul.querySelector("#elemento-3");
console.log(third);

const listH2= body.querySelectorAll("h2");
console.log(listH2);