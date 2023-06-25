// https://www.explainthis.io/en/interview-guides/javascript/js-event-loop-questions

console.log(1);

// setTimeout goes in macroTask queue which has lower priority by event loop
setTimeout(function () {
  console.log(2);
}, 0);

// Promise goes in microTask queue which has high priority by event loop 
Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });
