// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I am ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wraped ${gifts[i]} and added bow!`);
//     }
//     return gifts;

// }
// wrapGifts(gifts);
const names = ["Emmanuel", "Kibiwot", "Kipsang", "Chemweno", "Arawa", "Moon"];
const eventName = "Graduation"

function writeCards(names, occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
  }

  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }

  
  
  
  