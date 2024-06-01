new Promise((onSuccess, onFailure) => {
  var toss = (() => {
    return Math.floor(Math.random() * 6) + 1;
  })();
  if (toss % 2 == 0) {
    onSuccess(toss);
  } else {
    onFailure(toss);
  }
}).then(
  (num) => {
    console.log('Even: ' + num);
  },
  (num) => {
    console.log('Odd: ' + num);
  },
);
