const moment = require('moment');

const today = moment();
console.log(today.format());

console.log(moment("2020-01-01", "YYYY-MM-DD").isValid()); // true
console.log(moment("not-a-date", "YYYY-MM-DD").isValid()); // false

console.log(
    moment("2019 was a great year because I got married", "YYYY-MM-DD").isValid()
  );
  // Returns true because 2019 matches YYYY

moment().add(7, 'days');    // adds 7 days to current date
moment().add(7, 'months');  // adds 7 months to current date
moment().add(7, 'years');   // adds 7 years to current date


moment().subtract(7, 'days');   // subtracts 7 days to current date
moment().subtract(7, 'months'); // subtracts 7 months to current date
moment().subtract(7, 'years');  // subtracts 7 years to current date

const today = moment();
const nextWeek = today.add(7, 'days');
console.log(nextWeek.format('dddd Do MMMM, YYYY'));

moment('2020.01.01', 'YYYY.MM.DD').fromNow();
// 9 days ago

moment('2020.01.01', 'YYYY.MM.DD').fromNow(true);
// 9 days

const dateA = moment('01-01-1900', 'DD-MM-YYYY');
const dateB = moment('01-01-2000', 'DD-MM-YYYY');

console.log(dateA.from(dateB));