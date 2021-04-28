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

