//creates an array of fruits
let fruits = ["apples", "oranges", "pineapples"];

//declaring my least favorite fruit
let leastFavFruit = fruits[1];

//logs a fruit, favorite fruit, then least favorite fruit
function firstFruit() {
  let faveFruit = fruits[2];
  console.log(fruits[0]);

  favFruit();

  function favFruit() {
    console.log(faveFruit);
  }

  console.log(leastFavFruit);
}

//logs whatever I like to the console
whateverILike();
function whateverILike() {
  console.log("Hello, Chad.");
}

//alert with text of my choosing
let newFunc = function() {
  alert("Some text of my choosing.");
};
newFunc();

firstFruit();
