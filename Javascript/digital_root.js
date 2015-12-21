// A digital root is the recursive sum of all the digits in a number. 
// Given n, take the sum of the digits of n. If that value has two digits, 
// continue reducing in this way until a single-digit number is produced. 
// This is only applicable to the natural numbers.

// Examples:
// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6


function digital_root(n) {
  var digits = n.toString().split("");
  if (digits.length === 1) {
    return n;
  } else {
    digits.reduce(function(sum, current_num) {
      return sum + parseInt(current_num, 10); 
    }, 0);
  }
}

