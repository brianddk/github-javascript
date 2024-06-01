new Promise(function (onSuccess, onFailure) {
  var toss = (function () {
    return Math.floor(Math.random() * 6) + 1;
  })();
  if (toss % 2 == 0) {
    onSuccess(toss);
  } else {
    onFailure(toss);
  }
}).then(
  function (num) {
    console.log('Even: ' + num);
  },
  function (num) {
    console.log('Odd: ' + num);
  },
);
