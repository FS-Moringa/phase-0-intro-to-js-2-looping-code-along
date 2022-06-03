// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

const newArray = [];

function writeCards(stringArray, eventName) {
  for (let i = 0; i < stringArray.length; i++) {
    newArray.push(
      `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`
    );
    debugger;
  }
  return newArray;
}

function wrapGifts(gifts) {
  let i = 0;
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }

  return gifts;
}

function countDown(count) {
  let t = count;
  while (t >= 0) {
    console.log(t);
    t--;
  }
}
countDown(10);
