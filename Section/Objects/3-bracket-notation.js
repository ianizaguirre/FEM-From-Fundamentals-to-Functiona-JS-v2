// =================================
var person = [];

person.name = 'Mrs. White';
person.sex = 'female';

var who = person.name;

who; /*?*/
person; /*?*/

// =================================
// so if we want to assign the value to a valid variable name key, then we could use dot notation...
// We can't use dot notation when the value we add  is  supposed to be just a string literal with no key...
// so since "person.0" is not a valid variable name then , we just use bracket notation...
person[0] = 'I was not in the Billiards room';

person; /*?*/
// =================================
// When we use Bracket Notation, JS does not expect the key to be a string, so we need to add quotes around 'plea' ...
// person['plea'] = 'I would never';

person; /*?*/

// =================================
// without quotes, the brackets expect a variable
var plea = 'wouldShe';
person['plea'] = 'I would never';

person; /*?*/

// =================================
