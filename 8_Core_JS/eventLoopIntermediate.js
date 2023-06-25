// https://www.explainthis.io/en/interview-guides/javascript/js-event-loop-questions

console.log('begins');

// setTimeout will go to macroTask
setTimeout(() => {
  console.log('setTimeout 1');
  // Promise.resolve() will go to microTask
  Promise.resolve().then(() => {
    console.log('promise 1');
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log('promise 2');
  // setTimeout will go to macroTask
  setTimeout(function () {
    console.log('setTimeout 2');
    resolve('resolve 1'); //resolve leads to go to .then block
  }, 0);
}).then((res) => {
  console.log('dot then 1');
  setTimeout(() => {
    console.log(res);
  }, 0);
});
