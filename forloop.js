//Find the average of numbers from 1 to N.
// Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
let n=5
sum=0
for(let i=1;i<=n;i++){
    sum=sum+i
    avg=sum/n  
}
console.log(avg)

//Find the sum of squares of numbers from 1 to N.
//Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².
let a=5
sum=0 
for(let i=1;i<=a;i++){
    sum=sum+(i**2)
}
console.log(sum)

//Find the sum of cubes of numbers from 1 to N.
// Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.
let b=5
sum=0
for (let i=1;i<=b;i++){
    sum=sum+(i**3)
}
console.log(sum)

//Calculate the power of a number without using the ** operator.
//Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
let base=2
let power=5
let result=1
for (let i=1;i<=power;i++){
    result=result*base
}
console.log(result)

//Display the first N terms of the Fibonacci series.
//Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
let nn=7
let n1=0
let n2=1
for(i=0;i<nn;i++){
    console.log(n1)
    feb=n1+n2
    n1=n2
    n2=feb
}
//Display the first N terms of the series:
//1, 1/2, 1/3, 1/4, ...
//Example: If N = 4, display 1, 1/2, 1/3, 1/4.
let a1=4
for (let i=1;i<=a1;i++){
    console.log("1/" + i)
}

//Display the first N terms of the series:
//1, 11, 111, 1111, 11111, ...
//Example: If N = 5, display 1, 11, 111, 1111, 11111.
let a2=5
let num=0
for (let i=1;i<=a2;i++){
    num=num*10+1 
    console.log(num) 
}
//Display the first N terms of the series:
//1, 3, 9, 27, 81, ...
//Each term is obtained by multiplying the previous term by 3.
let a3=5
let num1=1
for(i=1;i<=a3;i++){
    console.log(num1)
    num1=num1*3
}

//Print all numbers from 10 to 150 that are divisible by both 3 and 5.
for(i=10;i<=150;i++){
    if(i%3==0 && i%5==0){
         console.log(i)
    }
   
}
//Count how many numbers from 200 down to 50 are divisible by 7.
count=0
for (let i=200;i>=50;i--){
    if(i%7==0){
        count+=1
    }
}
console.log(count)

//Print numbers from 120 down to 20 that are not divisible by 5.

for(let i=120;i>=20;i--){
    if(i%5!=0){
        console.log(i)
    }
}

//Find the average of all even numbers in the range from 10 to 100.
sum=0
count=0
for (let i=10;i<=100;i++){
    if(i%2==0){
        count+=1
        sum=sum+i
        avg=sum/count
    }
}
console.log(avg)
//Find the average of all factors of a given number.
let m=6
sum=0
count=0
for(let i=1;i<=6;i++){
    if(m%i==0){
        sum=sum+i
    count=count+1
    }
    avg=sum/count
}
console.log(avg)



