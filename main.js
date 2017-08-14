// create directory
// cd into directory
// npm init
// gitignore node
// create app.js and put a console.log('hi')
// node app.js
//
// npm install moment -save
// npm install chalk -save

let moment = require('moment');
moment().format();

//1.//
let now = moment();
  console.log("It is " moment " .");

//2.//
let dayOfYear = moment(DDD DDDD);
  console.log("it is " dayOfYear " day of the year.");
//3.//
  let secOfDay = moment(x);
  console.log("It is " x " seconds into the day.");

  //4.//
    function(dls){
  let dls = moment().isDST();
  if dls === (true) {
      console.log("It " answertrue "during Daylight Savings Time.");
      answertrue = "is"
  }
  else {
    console.log("It " answerfalse "during Daylight Savings Time.");
      answerfalse = "is not"
  }
}

  //5.//
  let leapYear = moment().isLeapYear();

  function(leapYear){
  if leapYear === (true) {
      console.log("It " answertrue "during Daylight Savings Time.");
      answertrue = "is"
  }
  else {
    console.log("It " answerfalse "during Daylight Savings Time.");
      answerfalse = "is not"
    }
  }
