// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The nested function has access to the variable internal because both the variable and nested function are inside of myFunction. Nested functions can reach outside themselves but outside functions cannot reach inside. 

/* Task 2: Counter */
function sumation(a){
  var total = 0;
    for(let i = 1; i <= a; i++){
      total += i;
    }
    return total;
}
console.log(sumation(4));
/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
