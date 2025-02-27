// const  addresss={
//     name:"waseen",
//     phone:"4676744",
//     add:"xyz"
// }
// const {add, name}=addresss
// console.log(name,add);
// console.log({...addresss, phone:"4536"});

let arr = [3,4,5,6,7,8,9]
let [a,b,c,d,...rest] = arr
// console.log(a,c,d);
console.log(a,b,c,d,rest);