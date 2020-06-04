//firt step is to split the strings into an array
//2nd step is to loop of the array, set the each element of the array to be the word variable
//turn the first letter of each element to uppercase then push it into the capWords empty array
//use the .join() method to join the array into a single string


let string = 'launch school tech & talk';
let words = string.split(' ');   // split the string into an array of words
let capWords = []; 

for (let i = 0; i < words.length; i++) {
    let word = words[i];  //set word to be the first element of the array wordss
    capWords.push(word[0].toUpperCase() + word.slice(1)); //capitalize the first letter and add it to the capWords array
}

console.log(capWords.join(' ')) // join the arrays into a string

