const anotherFunction = () => {
  for(let i = 0; i<10; i ++) {
    setTimeout(function timeout() {
      console.log(i);
    }, 3000);
  }
}
 
anotherFunction();
//i in console.log(i) makes a reference to a variable in a function outside of its own function(timeout) so it gets a closure thus keeps the value of that referenced variable (i) but all this just works because the variable named i declaration was with the let keyword so it can create a new local scope each time the for loop is executed, but when the exercise has a var i = 0 initialization statement at the for loop, all the console.log(i) it'll make a reference to the same var i with its last value (10)