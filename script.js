function daysOfAYear(year) {
  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

// Prompt the user for input and convert the input to a number
let inputYear = parseInt(prompt(""), 10);

daysOfAYear(inputYear)