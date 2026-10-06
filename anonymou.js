//annonumus functions
//Named function without input and without return
//1.print numbers from 1 to 10
let number=function(){
    for(i=1;i<=10;i++){
        console.log(i)
    }
}
number()

//2.print all even numbers from 1 to 20 that are divisiable by 5
let divisiable=function(){
    for(let i=1;i<=20;i++){
        if(i%5==0){
            console.log(i)
        }
    }
}
divisiable()

//3.find and print the average of numbers from 1 to 10
let average=function(){
    let sum=0
    let count=0
    for(let i=1;i<=10;i++){
        sum=sum+i
        count++
    }
    let avg=sum/count
    console.log(avg)
}
average()

//4.print the first 10 natural numbers in reverse order
let reverse=function(){
    for(let i=10;i>=1;i--){
        console.log(i)
    }
}
reverse()

//5.print all odd number between 1 tp 50
let odd=function(){
    for(let i=1;i<=50;i++){
        if(i%2==1){
            console.log(i)
        }

    }
}
odd()
//Named function with input and without return
//6.find the factorial of 5
let factorial=function(n1){
    let fact=1
    for(let i=1;i<=n1;i++){
        fact=fact*i  
    } 
 console.log(fact)
}
factorial(5)
//7.print table
let table=function(a){
    for(let i=1;i<=10;i++){
        console.log(a + "x" + i + "=" +(a*i))
    }
}
table(4)
//8.count the even digits in a number
let countdigit=function(n2){
    let count=0
        while(n2!=0){
            let d=n2%10
        if(d%2==0){
            count++
        }
        n2=parseInt(n2/10)
    }
    console.log(count)
}
countdigit(467824)
//9.count the odd digits in given number
let countdigitt=function(n2){
    let count=0
        while(n2!=0){
            let d=n2%10
        if(d%2==1){
            count++
        }
        n2=parseInt(n2/10)
    }
    console.log(count)
}
countdigitt(467824751397)
//10.find the largest of two number
let large=function(x,y){
    if(x>y){
        console.log(x," is largest")
    }
    else{
        console.log(y," is largest")
    }
}
large(23,50)
//without input and with return
// 11. Return a Number
let m=function(){
    return 100
}
console.log(m())
//12. Return the Sum
let n=function(){
    let summ=0
    for(let i=1;i<=10;i++){
        summ+=i
    }
return summ
}
console.log(n())
// 13. Return the Largest Number
let p=function(){
    let n1=10;
    let n2=15;
    let n3=20;
    if(n1>n2&&n1>n3){
        return n1+" is largest"
    }
    else if(n2>n1&&n2>n3){
        return n2+" is largest"
    }
    else{
        return n3+" is largest"
    }
}
console.log(p())

//14. Return the Even Numbers
let q=function(){
    let res=""
    for(let i=1;i<=10;i++){
        if(i%2==0){
            res=res+i+""
        }
    }
    return res
}
console.log(q())

//15.factorial return
let r=function(){
    let n=3
    let fact=1
    for(i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
console.log(r())
//Annonymous function with input and with return
// 16. Find the Last Digit
let s=function(x){
    while(x!=0){
        a1=x%10
        x=parseInt(x/10)
        break
    }
    return a1
}
console.log(s(5643))
//17. Find the Number of Digits
let s1=function(x){
    let count=0
    while(x!=0){
        a1=x%10
        x=parseInt(x/10)
        count++
    }
    return count
}
console.log(s1(56434))
// 18. Reverse a Number
let b1=function(x){
    let reverse=0
    while(x!=0){
        a1=x%10
        reverse=reverse*10+a1
        x=parseInt(x/10)
    }
    return reverse
}
console.log(b1(23765))
//19. Check Palindrome
let c1=function(x){
    let temp=x
    let rev=0
    while(x!=0){
        let a=x%10
        rev=rev*10+a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
if(temp==rev){
    return "palidrome"
}
else{
    return "not a palidrome"
}
}
console.log(c1(151))

//20. Find the First Digit
let v=function(x){
    let reverse=0
    while(x!=0){
        a1=x%10
        reverse=reverse*10+a1
        x=parseInt(x/10)
    }
    while(reverse!=0){
        a1=reverse%10
        reverse=parseInt(reverse/10)
        break
    }
    return a1
}
console.log(v(2456))
//Arrow function
// Without Input & Without Return
// 1.Print numbers from 1 to 10
let a=()=>{
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
a()
//2.Print all even numbers from 1 to 20.
let b=()=>{
    for(let i=1;i<=20;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
b()
//3.Print the multiples of 5 from 5 to 50.
let c=()=>{
    for(let i=5;i<=50;i++){
        if(i%5==0){
            console.log(i)
        }
    }
}
c()
//4.Print the square of numbers from 1 to 5.
let d=()=>{
    for(let i=1;i<=5;i++){
        console.log(i**2)
    }
}
d()
//5.Print all odd numbers from 1 to 20.
let e=()=>{
    for(let i=1;i<=10;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
e()
// 2. With Input & Without Return
//6. Take a number and print whether it is positive or negative.
let f=(x)=>{
    if(x>0){
        console.log(x+"  is positive")
    }
    else{
        console.log(x+" is negative")
    }
}
f(3)
//7.Take a number and print whether it is even or odd.
let g=(x)=>{
    if(x%2==0){
        console.log(x+" is even")
    }
    else{
        console.log(x+" is odd")
    }
}
g(10)
//8.Take two numbers and print their sum.
let h=(x,y)=>{
    console.log(x," + ",y," = ",x+y)
}
h(13,28)
//9.Take a number and print its multiplication table.
let k=(x)=>{
    for(let i=1;i<=10;i++){
    console.log(x," x ",i," = ",x*i)
}
}
k(3)
//10.Take a number and print all its factors.
let l=(x)=>{
    for(let i=1;i<=x;i++){
        if(x%i==0){
            console.log(i)
        }
    }
}
l(5)
// 3. Without Input & With Return
// 11.Return the sum of numbers from 1 to 10.
let mm=()=>{
    let sum=0
    for(let i=1;i<=10;i++){
        sum+=i
    }
    return sum
}
console.log(mm())
//12.Return the largest number between 10 and 20.
let nn=()=>{
   let a=10
   let b=20
   if(a>b){
    return a+" is largest"
   } 
   else{
    return b+" is largest"
   }
}
console.log(nn())
//13.Return the first even number from 1 to 10.
let o=()=>{
    for(let i=1;i<=10;i++){
        if(i%2==0){
            return i
        }
    }
}
console.log(o())
//14.Return the sum of even numbers from 1 to 20.
let p1=()=>{
    let sum=0
    for(let i=1;i<=20;i++){
        sum+=i
    }
    return sum
}
console.log(p1())
// 15.Return the factorial of 5.
let q1=()=>{
    let n=6
    let fact=1
    for(let i=1;i<=n;i++){
        fact*=i
    }
    return fact
}
console.log(q1())
// 4. With Input & With Return
// 16.Take a number and return its square.
let r1=(x)=>{
    return x**2
}
console.log(r(3))
//17.Take two numbers and return the larger number.
let ss=(x,y)=>{
    if(x>y){
        return x+" is largest"
    }
    else{
        return y+" is largest"
    }
}
console.log(ss(5,19))
//18.Take a number and return whether it is even or odd.
let t=(x)=>{
    if(x%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(t(6))

//19.Take two numbers and return their multiplication.
let u=(x,y)=>{
    return x*y
}
console.log(u(3,4))
// 20.Take a number and return the sum of its digits.
let vv=(x)=>{
    let sum=0
    for(let i=1;i<=x;i++){
        a1=x%10
        sum+=a1
        x=parseInt(x/10)
    }
    return sum
}
console.log(vv(4637))