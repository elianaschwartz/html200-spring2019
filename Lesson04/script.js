function numberSquarer() {
  let input = prompt('Enter a number');
  let result = 0;

  result = Number(input) * Number(input);

  alert(input + ' ' + 'squared = ' + result);
}

function numberMultiplier() {
  let firstInput = prompt('Pick a number');
  let secondInput = prompt('Pick another number');
  let result = 0;

  result = Number(firstInput) * Number(secondInput);

  alert(firstInput + ' multiplied by ' + secondInput + " = " + result);
}