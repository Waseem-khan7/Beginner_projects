// let marks = [98, 87, 65, 99, "not persent", null]

// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }
// console.log(marks);
// marks[2]= 54
// console.log(typeof marks);


// let num = [2,3,4,5,6,7,8,9]

// console.log( typeof num [3]);

// console.log(num.toString());

// console.log(num.join(" strings "));
 
// let m= num.pop()
// console.log(m,num);
// console.log(num.shift());


//deleting an element from an array "if we delete an elemnt from an array length of array still same"

// let num = [2,3,4,5,6,7,8,9]
// console.log(num.length);
//  let m= delete num[1]
//  console.log(num);
//  console.log(num.length);

 //adding a element in array
//  num[1]=55
//  console.log(num);


// sum of all the elements in an array
let num1 = [2,3,4,5,6,7,8,9]
let sum =0 
for(let i=0; i<num1.length; i++){
    sum= sum +num1[i]
} console.log(sum);



//add 5 in each element
// let num1 = [2,3,4,5,6,7,8,9]
// for(let i=0; i<num1.length; i++){
//     num1[i]= num1[i]+5
// } console.log(num1);


//reverse the array
// let num1 = [2,3,4,5,6,7,8,9]
// num1.reverse()
// console.log(num1);


//sorting the array in ascending order
// let compare = (a,b)=>{
//     return a-b
// }
// let num1 = [222,3,54,13,45,6,87,18,49]
// num1.sort(compare)
// console.log(num1);


// let n= [34,4,5,2,23,45,65,6]
// for (let i = 0; i<n.length; i++){
//     if(n[i]%2==0){
//         console.log( "this element are even"+n[i]);
//     }
//     else if (n[i]%2!=0){
//         console.log("this element are odd"+n[i]);
//     }
// }


// let a= [34,4,5,6,67]
// let a1= delete[2]
// console.log( typeof a);

// let num = [2,3,4,5,6,7,8,9]
// let m= delete num[1]
// console.log(m);


// let a= [34,4,5,6,67 ]
// let m =  a[2].toString()
// console.log(typeof m);
// console.log(a.indexOf(5))
// a.push(34,5,6,7,)
// console.log(a);


                          //for each loop
// let arr = [4,5,7,9,3]
// arr.forEach((element)=>{
//     console.log(element+1);
// });

// let arr = [4,5,7,9,3]
// arr.forEach((key)=>{
//     console.log(key*5);
// })


                     //array.from(it is used for change an string into array)
// let r= "mukku"
// let arr = Array.from(r)
// console.log(arr);


                     // for of loop
// let ar1= [2,4,45,56,6,4]
// for (let i of ar1){
//  console.log(i);   
// }

                        //for in loop
// ar1= [2,4,45,56,6,4]
// for (let i in ar1){
//  console.log(ar1[i]);   
// }
