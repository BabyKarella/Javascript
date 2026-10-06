
//Sum of Prime Numbers
//Find the sum of all prime numbers between 20 and 150.
let sum = 0;
for(let n = 20; n <= 150; n++) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i == 0) {
            count++;
        }
    }
    if(count == 2) {
      sum = sum + n;
    }
}
console.log(sum);

//Average of Perfect Numbers
//Find the average of all perfect numbers between 1 and 1000.
let sum1=0
 let count1=0
for(let n1=1; n1<=1000; n1++){
    let sum=0
    for(let i=1;i<n1;i++){
        if(n1%i==0){
             sum=sum+i
        }
       
    }
    if(sum==n1){
        sum1=sum1+n1
        count1=count1+1     

    }
}
let avg=sum1/count1 
console.log(avg)

//Leap Years in a Range
//Print all leap years between **1900 and 2026

for(let year=1900;year<=2026;year++){
    if(year%400==0 || year%100!=0 && year%4==0){
        console.log(year," is leap year ")
    }
    else{
        console.log(year,"is not a leap year")
    }
}

//Digit Sum = 10
//Print all numbers between **120 and 850** whose digit sum is exactly 10

for(let i=120;i<=850;i++){
    let temp=i;
    let sum=0;
    while(temp>0){
        let ld=temp%10
        sum=sum+ld
        temp=parseInt(temp/10)
    }
    if(sum==10){
        console.log(i)
    }
    
}

//Pairs with Target Sum
//Print all pairs `(a, b)` between **1 and 50** whose sum is **30**. Print each pair only once.
for(let i=1;i<=50;i++){
    for(let j=1;j<=50;j++){
        if(i+j==30&& i<=j){
            console.log(i,j)
        }
    }
}

//Exactly 3 Factors
// Print all numbers between 10 and 300 that have exactly 3 factors
for(let i=10;i<=300;i++){
    let count1=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count1++
        }
    }
    if(count1==3){
        console.log(i)
    }
}

//Prime Factors
//Print the prime factors of every number between 20 and 50.
for(let i=20;i<=50;i++){
    let factors=0
    for(j=1;j<=i;j++){
        if(i%j==0){
            factors++
        }
    }
    if(factors==2){
        console.log(i)
    }
}

//Armstrong Numbers
//Print all Armstrong numbers between 100 and 999
for(let i=100;i<=999;i++){
    let temp=i;
    let original=i;
    let count2=0;
    let summ=0;
    while(temp!=0){
        let digit=temp%10
        summ=summ+(digit**3)
        temp=parseInt(temp/10)
    }
    if(summ==original){
        console.log(original)
    }
}

//Maximum Factors
//Find the number between 50 and 150 that has the maximum number of factors.
let maxFactors = 0;
let maxNumber = 0;
for(let i=50; i<=150; i++){
    let factors = 0;
    for(let j=1; j<=i; j++){
        if(i % j == 0){
            factors++; 
        }
    }
    if(factors>maxFactors){
        maxFactors=factors;
        maxNumber=i;
    }
}
console.log("Number =", maxNumber);
console.log("Number of factors =", maxFactors);