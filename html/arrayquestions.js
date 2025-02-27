//Question 1 
// create an array and take input numbers from user to add in that array
// let arr = [4,6,7,54,6,76]
// let p = prompt("enter the number")
// a= Number.parseInt()
// arr.push(p)
// console.log(arr) 



//keep adding numbers to the array until 0 is added to the array
// let arr = [4,6,7,54,6,76]
// let p;
//     do{
//         p = prompt("enter the number")
//         p= Number.parseInt(p)
//         arr.push(p)
//         console.log(arr)
//     } while (p != 0);
//         console.log(arr)


//filter for numbers divisible by 10 from a given array
// let a=[34,4,5,10,5760,40,3,60,456]
// let m= a.filter((value) => {
//     return value%10==0
// })
// console.log(m);



//create an array of square of given numbers
// let arr=[3,5,6,5,7,8,5]
// let k=arr.map((value)=>{
//     return value*value
// }); console.log(k);



//use reduce method to calculate factorial from an array of first n natural numbers 
let a=[1,2,3,4,]
let m= a.reduce((x1,x2) =>{
        return x1*x2
})
console.log(m);