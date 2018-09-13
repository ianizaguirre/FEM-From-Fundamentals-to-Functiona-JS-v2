var person = {};
console.log(typeof person);
person.name = 'Mrs. White';

person.name; /*?*/

person; /*?*/
// =====================================
// We store PRIMITIVE Values by Value.
// --  person.name is a string
var who = person.name;

who; /*?*/

// ======================================
// We store NON-Primitive values by Reference
// -- here we are updating the person object
person.name = 'MR. White';

person.name; /*?*/

who; /*?*/

person; /*?*/

// =======================

who.story; /*?*/
person; /*?*/
