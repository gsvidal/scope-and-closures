//We use this code in a browser developer tools
var a = "Hello";

function hello() {
  let b = "Hello World";
  const c = "Hello World!";
  if(true) {
    let d = "Hello World!!";
    debugger
  }
}

hello();


//
const moneyBox = () => {
  debugger
  let saveCoins = 0;
  const countCoins = (coins) => {
    debugger
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);