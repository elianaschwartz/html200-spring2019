let balance = 1000;
let quit = false;

function bank() {

  while(quit === false) {
    let input = prompt('What would you like to do?');

    if (input === 'Q') {
      quit === true;
      break;
    } else if (input === 'W'){
      let withdrawalAmount = prompt('How much would you like to withdraw?');
      balance -= Number(withdrawalAmount);
      alert('New balance: ' + balance);
    } else if (input === 'D') {
      let depositAmount = prompt('How much would you like to deposit?');
      balance += Number(depositAmount);
      alert('New balance: ' + balance);
    } else if (input === 'B') {
      alert('Balance: ' + balance);
    } else {
      alert('I don\'t understand that command');
    }
  } 
}
