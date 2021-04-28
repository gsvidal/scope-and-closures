//Local scope:

const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
}

helloWorld();
console.log(hello);


var scope = "I'm global";
const functionScope = () => {
  var scope = "I'm just a local";
  const func = () => {
    return scope;
  }
  console.log(func());
}

functionScope();
//I'm just a local
console.log(scope);
//I'm global


