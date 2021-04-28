var hello = "Hello";
let world = "Hello world";
const helloWorld = 
"Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
} 

anotherFunction();

const helloWorld = () => {
  globalVar = "I'm global";
  //we should specify if var, let o const type of variable.
}

helloWorld();
console.log(globalVar);