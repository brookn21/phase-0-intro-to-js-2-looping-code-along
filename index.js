// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  /*
  In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array.
  */

  function writeCards(arr, event){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
  }

  function countDown(num){
    let i = 0
    while(num >= i){
      console.log(num)
      num--
    }
  }
  countDown(10)

  // function countDown(num){
  //   let i = 0
  //   while( i < num){
  //     console.log(num = num - 1)
  //     num = num - 1
  //   }
  // }
  // countDown(10)