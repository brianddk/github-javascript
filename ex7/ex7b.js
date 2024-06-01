var randDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var mySuccess = function (num) {
  console.log('Even: ' + num);
};

var myFailure = function (num) {
  console.log('Odd: ' + num);
};

var myAsync = function (onSuccess, onFailure) {
  var toss = randDice();
  if (toss % 2 == 0) {
    onSuccess(toss);
  } else {
    onFailure(toss);
  }
};

var myProm = new Promise(myAsync);
myProm.then(mySuccess, myFailure);
