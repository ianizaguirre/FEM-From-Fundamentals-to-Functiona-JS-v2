/* === Before ES6 ===
var a = 1
var b = 2

var temp = a  // 1

a = b  // 2

b = temp  // 1

a // 2
b // 1

===== */

// With ES6
{
  var a = 1;
  var b = 2;

  [b, a] = [a, b];

  a;
  b;
}
