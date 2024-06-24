import { EventEmitter } from "node:events";

let news, breaking;

function createNewsFeed() {
  const emitter = new EventEmitter();

  news= setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  breaking= setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed()

newsFeed.on( "newsEvent", (news)=>{console.log(news)}),
newsFeed.on("breakingNews", (breaking)=>{console.log(breaking)}),
newsFeed.on("error", (error)=>{console.log(error); clearInterval(news); clearInterval(breaking)})   