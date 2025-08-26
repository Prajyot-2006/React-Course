const array = [1,2,3]
/*
const odd = array[0];
const even = array[1];
*/
// we can do like this for above code : this is known as destructuring
const[odd,even] = array;  // order matters in array destructuring 
console.log()

console.log(odd);   // this always gets the 1st value out of the aray 
console.log(even);  // this always gets the 2nd value out of the aray 