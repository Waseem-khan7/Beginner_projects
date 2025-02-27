// const canDrive = (age) =>{
//     return age>18?true:false
// }
// let runAgain = true;
// while (runAgain){
//     let age = prompt("enter your age")
// age = Number.parseInt(age)
// if (canDrive(age)){
//     alert("yes you can drive")
// }
// else{
//     alert("you can not drive")
// }
//  runAgain =  confirm("you want to see again") 
// }






const canDrive = (age) =>{
    return age>18?true:false
}
let runAgain = true;
while (runAgain){
    let age = prompt("enter your age")
    age = Number.parseInt(age)
    if(age<0)
        console.error("please enter the valid age")
    break;
if (canDrive(age)){
    alert("yes you can drive")
}
else{
    alert("you can not drive")
}
 runAgain =  confirm("you want to see again") 
}



// change the url to googl.com when user e ter a number greater than 4

let n = prompt("enter the number")
n=Number.parseInt(n)
if(n > 4){
    location.href = "https://google.com"
}



let color = prompt("enter the color of the backgound")
document.body.style.background = color