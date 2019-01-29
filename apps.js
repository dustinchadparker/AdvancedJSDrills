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