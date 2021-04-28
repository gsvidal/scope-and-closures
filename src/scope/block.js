const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi"; 
  }
  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits3);
}

fruits();
//apple
//Error, console.log(fruits2) and console.log(fruits3) are outside the 

//Usando let:
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);
//2
//1

//Usando var:
var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);
//2
//2
//That's why it's important to use let instead of var


const anotherFunction = () => {
  for(let i = 0; i<10; i ++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
 
anotherFunction();

function functionName() {
	var i;
	for(i = 0; i < 3; i++) {
		setTimeout(function() {
			console.log(i);
		}, 1000);
	}
	// Este console.log podra acceder a i aun afuera del for, esto por que la variable i fue declarada y asignada antes que todo en tiempo de ejecución (hoisting).
	console.log('El valor final de "i" es: ' + i);
}
functionName();
// El valor final de "i" es: 3
// 3
// 3
// 3

console.log(sss);
let sss = "44";