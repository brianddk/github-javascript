function randDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function mySuccess(num) {
  console.log('Even: ' + num);
}

function myFailure(num) {
  console.log('Odd: ' + num);
}

function myAsync(onSuccess, onFailure) {
  var toss = randDice();
  if (toss % 2 == 0) {
    onSuccess(toss);
  } else {
    onFailure(toss);
  }
}

var myProm = new Promise(myAsync);
myProm.then(mySuccess, myFailure);
