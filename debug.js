// setTimeout(function() {
//     console.log('I promised to run after 1s')
//     setTimeout(function() {
//       console.log('I promised to run after 2s')
//     }, 1000)
//   }, 1000)


//Promises::

//   const wait = () => new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000)
//   })
//   wait().then(() => {
//     console.log('I promised to run after 1s')
//     return wait()
//   })
//   .then(() => console.log('I promised to run after 2s'))



//Generators::

  function *calculator(input) {
    var doubleThat = 2 * (yield (input / 2))
    var another = yield (doubleThat)
    return (input * doubleThat * another)
}

const calc = calculator(10);

console.log(calc.next());
console.log(calc.next(7));
console.log(calc.next(100));


// For-Of::

//iterate over the value
for (const v of ['a', 'b', 'c']) {
    console.log(v);
  }

 //get the index as well, using `entries()`
 for (const [i, v] of ['a', 'b', 'c'].entries()) {
   console.log(i, v);
 }

 const value = '🍋';
 console.log(value);
 