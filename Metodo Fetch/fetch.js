async function fetchData () {
    const cards= await fetch("https://ringsdb.com/api/public/cards/");
    const list =  await cards.json();
    return list
}
/* 
fetchData().then(list =>{console.log(list)}) */

let card= {};

fetch("https://ringsdb.com/api/public/card/01065.json",{method: "GET"}).then(call=>{return call.json()}).then(data=>{
    card=data;
    console.log(card);

    const title= document.querySelector("#title");
    title.innerText= card.name;

    const illustration= document.querySelector("#illustration");
    illustration.setAttribute("src", "https://ringsdb.com/bundles/cards/01065.png")
});
