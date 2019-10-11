function isPalindrome () {

  let nstr = document.getElementById("inp").value;
  let res = '';
  nstr = String(nstr.toUpperCase());

  for (let i = nstr.length; i > 0; i -= 1) {
    res = res + nstr[i - 1];
  }

  if (res === nstr) {
    document.getElementById("result").innerHTML = "It's palindrome";
  } else {
    document.getElementById("result").innerHTML = "It isn't palindrome";
  }

  
};
