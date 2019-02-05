#Advanced JavaScript Drills
##Objective
- The objective of this lab assignment is to practice using advanced JavaScript that were explored in lecture.

###Hoisting and Functions
01. Set the word name equal to your name
02. Use the var keyword to define name as a variable
03. Log the value of name to the console

```js
name = 'Covalence';
var name;
console.log(name);
```

**What do you expect to be logged?**

- Open your developer tools and view what is printed in the console. You'll see that the current name was printed.
- - This is the effect of hoisting. When the browser interprets our JavaScript code it hoisted the declaration for the variable name and then assigned it to the current name so when name was logged, it is defined.
- Change the var keyword to let
- Save and refresh the browser
- - There is now a ReferenceError and name is no longer defined! Only the declarations using the var keyword are hoisted
- Change the let keyword back to var and create a function named setName

- Inside the setName function write the following code and then call it BEFORE the function is declared

```js
setName();
function setName() {
var name = 'Covalence';
console.log(name);
}
```

**What do you expect to be logged in the console?**
*Save and refresh the browser*

- The value logged is the value for name.
- We called the function before it was declared and when it was interpreted, the function was hoisted above the function call so we were successfully able to log the value of name.
- Create a new function declaration that will accept two parameters. The value of the parameters will be used to determined the average and the result will be returned.
- Add console logs to monitor each stage. Your code should look similar to:

```js
console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
console.log('some text');
var answer = ( a + b) / 2;
return answer;
}
```

**In what order will the logs be printed in the console?**

#####Now that we have exercised hoisting, let's practice scoping.

01. Create an array called fruits
- The fruits array should have three fruits
02. Declare a global variable named favFruit using the let keyword.
03. Create a function declaration that will print the first fruit in the fruits array
04. Inside this function create a new variable and set it equal to your favorite fruit
05. Call the function
06. Save and refresh the browser. You should now see the first fruit printed in the console
07. Declare another function that will print your favorite fruit.
08. Call the function

**Your code should look similar to:**

```js
let fruits = ['apple', 'tomato', 'banana'];
let favFruit;
function printFruits() {
favFruit = fruits[2];
console.log(fruits[0]);
}

function printFavFruit() {
console.log(favFruit);
}

printFruits();
printFavFruit(); 
```

*Save and refresh the browser.*
**Why was the printFavFruit function able to log favFruit?**

09. Remove the declaration of favFruit in the global scope
10. Declare favFruit using the let keyword in the printFruits function

```js
let favFruit = fruits[2];
Save and refresh the browser. favFruit is no longer in the global scope so printFavFruit() does not have access to the favFruit variable and is now undefined.
Nest the printFavFruit function inside of the printFruits function.
function printFruits() {
let favFruit = fruits[2];
console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

}
printFruits();
printFavFruit();
```

11. Call the printFavFruit function inside printFruits function
12. Save and refresh the browser. favFruit is now logged because the printFavFruit has access to variables in its parent function.
13. Create a new variable named leastFav using the let keyword
14. Assign it to your least favorite fruit
15. Log leasFav to the console after the printFavFruit function is declared
16. Save and refresh the browser. leastFav is undefined because the parent function does not have access to variables declared within the nested function.
17. Create a new function and name the function whatever you would like, make sure to create this using the function keyword, have this function console.log “Hello, “ and then your name. Call this function BEFORE the function body. *Example:*
```js
someFunc();
function someFunc() {
}
```
_You’ll notice the function runs no problem, because the function is hoisted_
18. Create a new function and name the function using a function expression (create it using let, not ver). Have this function have an alert appear with some text of your choosing.
19. Call the function before it is declared as an expression, what happens? Because of hoisting and the use the ES6 an error may occur. Adjust the code to allow the function to run.
