const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'y').subtract(6, 'M');
// console.log(date.format('MMM Do YYYY h:mm:ss a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1539997891239;
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY h:mm a'));
