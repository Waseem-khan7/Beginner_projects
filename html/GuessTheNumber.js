let a= Math.random()*100;
a=Number.parseInt(a)
let num;
let score= 100;
while(num != a){
    score = score-1;
    num = prompt("enter the number :")
    if(num == a){
        console.log("congratulation you guess the correct number.")
        console.log("You guess the actual number in" + (100 - score) +"chances.")
    }
    else if(num > a && num <100){
        console.log("Your number is greater than the actual number")
    }
    else if (num < a && num > 0 ){
        console.log("your number is smaller than the actual number")
    }
    else {
        console.log("enter the number between 1 to 100")
    }
}