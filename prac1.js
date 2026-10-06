let sum=0
for(i=1;i<=20;i++){
    sum=sum+i
}
console.log(sum)

let n=45678
let count=0
while(n!=0){
  if(n%10){
    count++
  }
  n=parseInt(n/10)
}
console.log(count)

let n1=456
let sum1=0
for(let i=1;i<=n1;i++){
    let ld=n1%10
    sum1=sum1+ld
n1=parseInt(n1/10)
}
console.log(sum1)
 
let summ=0
for(let i=1;i<=10;i++){
    if(i%2==0){
        summ=summ+i
    }
}
console.log(summ)

let nn=12345
while(nn!=0){
    let ld=nn%10
    console.log(ld)
    nn=parseInt(nn/10)
}

let m=87445
let rev=0
while(m!=0){
let ld=m%10
rev=rev*10+ld
m=parseInt(m/10)
}
console.log(rev)

//palindrome
let d=1221
let original=d
let revv =0
while(d!=0){
    let ld=d%10
    revv=revv*10+ld
    d=parseInt(d/10)
}
if(original==revv){
    console.log(original,"is palindrome")
}
else{
    console.log(original,"is not a palindrome")
}
console.log("reverse:",revv)
//largest number
let b=27356789
let max=0
while(b!=0){
let ld=b%10
if(ld>max){
    max=ld
}
b=parseInt(b/10)
}
console.log(max)
//smallest number
let c=56789345
let min=9;
while(c!=0){
    let ld=c%10
    if(ld<min){
        min=ld
    }
c=parseInt(c/10)
}
console.log(min)
//even count
let s=5463768
let countt=0
while(s!=0){
    let ld=s%10
    if(ld%2==0){
        countt++
    }
    s=parseInt(s/10)
}
console.log(countt)

//odd count
let s1=5463768
let counttt=0
while(s1!=0){
    let ld=s1%10
    if(ld%2!=0){
        counttt++
    }
    s1=parseInt(s1/10)
}
console.log(counttt)

//check wheather a number is amstrong or not
let h=153;
let originall=h;
let counnt=0;
let suum=0;
while(h!=0){
    counnt++
    h=parseInt(h/10) 
}
h=originall;
while(h!=0){
    let ld=h%10;
    suum=suum+(ld**counnt)
    h=parseInt(h/10)   
}
if(originall==suum){
    console.log(originall,"is amstrong number")
}
else{
    console.log(originall,"is not amstrong number")
}
//check perfect number or not
let e=28
let sum2=0
for(let i=1;i<e;i++){
    if(e % i ==0){
        sum2=sum2+i;
    }
}
if(sum2 == e){
    console.log(e,"is perfect number")
}
else{
    console.log(e,"is not perfect number")
}
//print all factors of a number
let r=12
for(let i=1;i<=r;i++){
    if(r%i==0){
        console.log(i)
    }
}
//conut the factors
let rr=44
let count1=0
for(let i=1;i<=rr;i++){
    if(rr%i==0){
        count1++
    }
}
console.log(count1)
//check wheather a number is prime or not
let w=7
let factors=0
for(let i=1;i<=w;i++){
    if(w%i==0){
        factors++
    }
}
if(factors==2){
        console.log(w,"is prime number")
    }
    else{
        console.log(w,"not a prime number")
    }