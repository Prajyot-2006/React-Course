
const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'orange'];
/*
It means:
Take everything from fruits
And add 'orange' to it
*/
console.log(moreFruits); // ['apple', 'banana', 'orange']


const fale = ['apple' , 'kela'];
console.log(...fale);  // still prints apple , kela

/*
🔍 What’s happening?
...fale means: "Take out all the items from the fale array"
[...fale] means: "Put all those items into a new array"

✅ Output:
["apple", "kela"]
So it's exactly like the original array, but it's a new copy.

🧠 Why use [...]?
To copy the array or add new items without changing the original one.
*/