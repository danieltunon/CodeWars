function longestPalindrome(s) {
  var maxLength = 0;
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  for(var i = 0; i + maxLength < s.length - 1; i++) {
    for(var j = maxLength + 1; j < s.length - 1; j++) {
      if(isPalindrome(s.substr(i, j))) {
        maxLength = j;
      } else break;
    }
  }
  return maxLength;
}

console.log(longestPalindrome("a"));
console.log(longestPalindrome("aa"));
console.log(longestPalindrome("baa"));
console.log(longestPalindrome("aab"));
console.log(longestPalindrome("baabcd"));
console.log(longestPalindrome("baablkj12345432133d"));