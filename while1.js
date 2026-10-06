//Find the sum of digits in a given number
let n=738
let sum=0
while(n>0){
    let ld=n%10
    sum=sum+ld
    n=parseInt(n/10)
}
  console.log(sum)

//Find the average of digits in a given number.
let n1=624
let sum1=0
let count=0
let avg=0
while(n1>0){
    let ld=n1%10
    sum1=sum1+ld
    count=count+1
    avg=sum1/count
    n1=parseInt(n1 / 10)
}
console.log(avg)

//Find the sum of the first digit and the last digit of a given number.
let n2=936
let sum2=0
let ld=n2%10
while(n2>=10){
    n2=parseInt(n2 / 10)
}
let fd=n2
sum2=fd+ld
console.log(sum2)

//Find the average of digits that are divisible by 5 in a given number
let n3=125755
let sum3=0
let count3=0
let avg1=0
while(n3>0){
    let ld=n3%10
    if(ld%5==0){
        sum3=sum3+ld
        count3=count3+1
    }
n3=parseInt(n3 / 10)
}
avg1=sum3/count3
console.log(avg1)

//Find the difference between the largest digit and the smallest digit in a given number
let n4=58321
let last=0
let small=9
while(n4>0){
    let ld=n4%10
    if(ld>last){
        last=ld
    }
    if(ld<small){
        small=ld
    }
    n4=parseInt(n4 /10)

}
let difference=last-small
console.log(difference)

