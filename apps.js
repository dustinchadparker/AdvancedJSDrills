let fruits = ["apples", "oranges", "pineapples"];
let leastFavFruit = fruits[1];

function firstFruit () {

    let faveFruit = fruits[2];
    console.log(fruits[0]);
    
    favFruit();
    
    function favFruit() {
        console.log(faveFruit);
    }
    
    
    console.log(leastFavFruit);
 

}

whateverILike();
function whateverILike() {
    console.log("Hello, Chad.");
}


let newFunc = function() {
    alert("Some text of my choosing.");

}
newFunc();

firstFruit();

// let returned = 0;


// function messageNumber(message, number) {
//     console.log(message);
//     returned = number;
//     return number;
// }

// function multiplyGlobal(returned) {
//     console.log (returned*4);
// }

// setTimeout(multiplyGlobal, 2000, 2);

// function getWords(word1, word2, word3, word4) {
    
//     console.log(word1);
//     setTimeout(() => {
//         console.log(word2);
//      }, 3000);
//      setTimeout(() => {
//         console.log(word3);
//      }, 5000);
//      setTimeout(() => {
//         console.log(word4);
//      }, 6000);
// }

// getWords("hey", "hey2", "hey3", "hey4");

// function countDown(num, function() {

//     while(num > 1) {
//         setTimeout(() => {
//          }, 1000);

//          console.log(num);
//          num--;
//         }
// }, function(err) {
//     console.log("Soemthing went wrong.");
// });

    

// countDown(66, done('DONE!'));

// function done(message) {
//     console.log(message);
// }

// function slowEcho(message, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve(multiplyGlobal());

//                 let err = new Error('Something odd happened.');
//                 reject(err);
            
//         }, 2000);
//     });
// }

// slowEcho("hi", 2000);

// $('h3').click, async () => {

//     try {
//         let someMessage = await slowEcho('Hello World', 2);
//         console.log(someMessage[0]);
//         return (someMessage[1]);
//     } catch (e) {
//         console.log(e);
//     }
//     console.log(result1);
// };



// let p = Promise.resolve("Hello!");
// let q = Promise.reject(new Error("Uh oh"));

// p.then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// });

// q.then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// });

// Promise.all([
//     slowEcho("I waited 1 second!", 1000),
//     slowEcho("I waited 2 second!", 2000),
//     slowEcho("I waited 3 second!", 3000),
// ]).then(([result1, result2, result3]) => {
//     console.log(result1);
// }).catch((err) => {
//     console.log(err);
// });

// getWordOfTheDay()
//     .then(function (word) {
//         return tellFriend(word);
//     }).then(function (response) {
//         console.log(response);
//     }).catch(function (err) {
//         console.log('Somethingf went wrong');
//         console.log(err);

//     });
