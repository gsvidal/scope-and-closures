//Example 1:
//We're making a wallet
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`); 
}

moneyBox(5);
moneyBox(10);
//It doesn't create a closure
// MoneyBox: 5
// MoneyBox: 10



//Example 2:
//From an inner function making a reference to a variable in an outer function creates a closure
//It can be recognized with a function returning a function
const moneyBox = () => {
  let saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);

// MoneyBox: 5
// MoneyBox: 15
