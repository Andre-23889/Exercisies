function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const players= ["Tina", "Jorge", "Julien"];

async function getResults (playerArray) {
  for(let i= 0; i< playerArray.length; i++) {
    try {
        const result= await luckyDraw(playerArray[i]);
        console.log(result, "test");
      } catch (error) {
      console.log(error.message)
    }
  }
}

getResults(players)