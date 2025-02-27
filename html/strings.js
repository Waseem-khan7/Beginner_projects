let name = "kareem"
let fr = "saleem"

// console.log(name.toLowerCase());

//print a string letters one by one
/*let str = "jamal"
console.log(`normal output is ${str}`);
for (let i= 0; i<str.length; i++){
    console.log(str[i]);
}
*/



// console.log(name.length);
for (let i=0 ; i<fr.length; i++){
    console.log(fr[i]);
}

// console.log(name.toString());

// console.log(name.replace("a","m"));

// console.log(name.replace("m","a"));

// console.log(fr);

// console.log(fr.trim());

// console.log(fr.slice([2]));
console.log("har\"".length);


const sentence = " the quick brown fox jumps over the lazy dog "
const word = "fox"
console.log(sentence.includes(word));
// console.log(`the word "${word}"${sentence.includes(word) ? " is " : "is not" }in the sentence `);


let br = "WASEEM"
console.log(br.toLowerCase());


let m = "rose"
// console.log(m.lastIndexOf());
// console.log(br.valueOf());


// extract the amount from the sentence(please give rs 1000)
let s= "please give rs 1000"
let amount = Number.parseInt( s.slice(15))
// let amount = s.slice("please give rs ".length)
console.log (typeof amount);

// Ques change the character of a string
let p = "ritikadeewani"
p[3]= "M"  //p is not change because string are immutable
console.log(p);