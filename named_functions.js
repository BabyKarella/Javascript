//Named function without input and without return

//1.print a message
// function msg(){
//     console.log("WELCOME TO JAVASCRIPT ")
// }
// msg()

//2.print your details
// function details(){
//     console.log("NAME:Baby,AGE:21,City:Bhimavaram")
// }
// details()

//3.print numbers 1 to 10
// function numbers(){
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// numbers()

//4.print even numbers
// function even(){
//     for(let i=1;i<=20;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// even()

//5. print odd numbers
// function odd(){
//     for(let i=1;i<=20;i++){
//         if(i%2==1){
//             console.log(i)
//         }
//     }
// }
// odd()

//6.sum of numbers
// function sum(){
//     let sum=0
//     for(i=1;i<=20;i++){
//         sum=sum+i
        
//     }
//   console.log(sum)
// }
// sum()

//7.multiplication table
// function table(){
//     let n=3
//     for(let i=1;i<=10;i++){
//         console.log(n + "x" + i + "=" +(n*i))
//     }
// }
// table()

//8.count numbers
// function count(){
//     let count=0
//     for(let i=1;i<=15;i++){
//         count=count+1
//     }
//     console.log(count)
// }
// count()

//9.sum of even numbers
// function evensum(){
//     let sum=0
//     for(let i=1;i<=20;i++){
//         if(i%2==0){
//             sum=sum+i
//         }
//     }
//     console.log(sum)
// }
// evensum()

//10.factorial
// function factorial(){
//     let factorial=1
//     let n=5
//     for(let i=1;i<=n;i++){
//         factorial=factorial*i
//     }
//     console.log(factorial)
// }
// factorial()

//11.prime number 
// function prime(){
//     for(let i=1;i<=50;i++){
//          let count1=0
//         for(let j=1;j<=i;j++){
//             if(i%j==0){
//                 count1+=1
//             }
//         }
//         if(count1==2){
//             console.log(i)
//         }
//     }
// }
// prime()

//12.sum of primes
// function sumprime(){
//      let sum=0
//     for(let i=1;i<=50;i++){
//         let count2=0
//         for(let j=1;j<=i;j++){
//             if(i%j==0){
//                 count2+=1
//             }
//         }
//         if(count2==2){
//             sum=sum+i
//         }
//     }
//     console.log(sum)
// }
// sumprime()

//13.perfect number
// function perfect(){
//     for(let i=1;i<=100;i++){
//         let sum=0
//         for(let j=1;j<i;j++){
//             if(i%j==0){
//                 sum=sum+j
//             }
//         }
//         if(sum==i){
//             console.log(i)
//         }
//     }
// }
// perfect()

//14.palindrome numbers
// function palindrome(){
//     for(i=1;i<=100;i++){
//         let on=i;
//         let temp=i;
//         let rev=0;
//         while(temp>0){
//             let ld=temp%10;
//             rev=rev*10+ld;
//             temp=parseInt(temp/10)
//         }
//         if(on==rev){
//             console.log(i)
//         }
        
//     }
// }
// palindrome()

//15.amstrong number
// function amstrong(){
// for(let i=1;i<=200;i++){
//     let original=i
//     let tempp=i
//     let count3=0
//     let sum=0
//     while(tempp>0){
//         count3++
//         tempp=parseInt(tempp/10)
//     }
//     tempp=i
//     while(tempp>0){
//         digit=tempp%10
//         sum=sum+(digit**count3)
//         tempp=parseInt(tempp/10)
//     }
//     if(sum==original){
//         console.log(i)
//     }
// }
// }
// amstrong()

// Named Function – With Input (Arguments) & Without Return
//1.Print a Name
// function name(name){
//     console.log("My name is "+ name)
// }
// name("baby")


//2.Add Two Numbers
// function addtwo(a,b){
//     let sum=a+b
//     console.log("sum of two numbers "+ sum )
// }
// addtwo(10,20)

//3.Find Square of a Number
// function Square(n){
//     console.log("square = ",n*n)
// }
// Square(5)

//4.check even or odd
// function check(a){
//     if(a%2==0){
//         console.log("even",a)
//     }
//     else{
//         console.log("Odd",a)
//     }
// }
// check(8)

//5.find largest number
// function large(a,b){
//     if(a>b){
//         console.log("largest=",a)
//     }
//     else{
//         console.log("largest=",b)
//     }

// }
// large(30,50)

//6.find factorial of a number
// function fact(a){
//     let fact=1
//     for(let i=1;i<=a;i++){
//         fact=fact*i
//     }
//     console.log("factorial = ",fact)
// }
// fact(5)

//7.find sum of digits
// function sumofdigits(b){
//     let sum=0
//     while(b!=0){
//         let ld=b%10
//         sum=sum+ld
//         b=parseInt(b/10)
//     }
   
//     console.log("sum = ",sum)
// }
// sumofdigits(145)

//8.Check Prime Number
// function prime(s){
//          let count1=0
//         for(let j=1;j<=s;j++){
//             if(s%j==0){
//                 count1+=1
//             }
//         }
//         if(count1==2){
//               console.log(s,"is prime")
//         }
//         else{
//             console.log(s,"is not prime")
//         }
//     }
// prime(3)

//9.reverse of any number
// function reverse(r){
//     let rev=0
//     while(r!=0){
//         a=r%10
//         rev=rev*10+a
//         r=parseInt(r/10)
//         if(r==0){
//             break
//         }
//     }
//     console.log(rev)
// }
// reverse(34562)

//10.count the even digits
// function countt(w){
//     let countt=0
//     while(w!=0){
//         let ld=w%10
//         if(w%2==0){
//             countt++
//         }
//         w=parseInt(w/10)
        
//     }
//     console.log(countt)
// }
// countt(367585742)
//11.check palindrome number
// function palindromee(e){
//     let original=e
//     let reverse=0
//     while(e!=0){
//          let ld=e%10
//         reverse=reverse*10+ld
//         e=parseInt(e/10)
//     }
//     if(original==reverse){
//     console.log(original,"is a palindrome")
//     }
//     else{
//     console.log(original,"is not palindrome")
//     }
   
// }
// palindromee(1221)

//12.amstrongnumber
// function amstrong(q){
// for(let i=1;i<=q;i++){
//     let original=q
//     let tempp=q
//     let count3=0
//     let sum=0
//     while(tempp>0){
//         count3++
//         tempp=parseInt(tempp/10)
//     }
//     tempp=i
//     while(tempp>0){
//         digit=tempp%10
//         sum=sum+(digit**count3)
//         tempp=parseInt(tempp/10)
//     }
// if(sum==original){
//     console.log(q,"is amstrong ")
// }
// else{
//     console.log(q,"is not amstrong")
//  }
// }
// }
// amstrong(153)

//13.sum of prime numbers in a range
// function sumprime(s,e){
//     let sum=0
//     for(let i=s;i<=e;i++){
//         let count=0
//         for(let j=1;j<=i;j++){
//             if(i%j==0){
//                 count++
//             }
//         }
//         if (count==2){
//             sum=sum+i
//         }
    
//     }
//         console.log(sum)
// }
// sumprime(1,10)
//14.print amstrong number in the range 
// function amstrong(m,b){
// for(let i=m;i<=b;i++){
//     let original=i
//     let tempp=i
//     let count3=0
//     let sum=0
//     while(tempp>0){
//         count3++
//         tempp=parseInt(tempp/10)
//     }
//     tempp=i
//     while(tempp>0){
//         digit=tempp%10
//         sum=sum+(digit**count3)
//         tempp=parseInt(tempp/10)
//     }
// if(sum==original){
//     console.log(i,"is amstrong ")
// }

// }
// }
// amstrong(1,1000)
//15.print perfect number in range
// function perfect(b,c){
//     for(let i=b;i<=c;i++){
//         let sum=0
//         for(let j=1;j<i;j++){
//             if(i%j==0){
//                 sum=sum+j
//             }
//         }
//         if(sum==i){
//             console.log(i)
//         }
//     }
// }
// perfect(1,100)


//Named without input & with return

// 1.Return a fixed number
// function fix(){
//     return 100
// }
// let ans=fix()
// console.log(ans)

//2.Return a fixed message "hello world"
// function mssg(){
//     return "hello world"
// }
// let anss=mssg()
// console.log(anss)

//3.Sum of 1 to 10
// function sum(){
//     let sum=0
//     for(let i=1;i<=10;i++){
//         sum+=i
//     }
//     return sum
// }
// let summ=sum()
// console.log(summ);

//4.Sum of even numbers from 1 to 20
// function even(){
//     let esum=0
//     for(let i=1;i<=20;i++){
//         if(i%2==0){
//             esum+=i
//         }
//     }
//     return esum
// }
// let esumm=even()
// console.log(esumm)

//5.Sum of odd numbers
// function odd(){
//     let sum1=0
//     for(let i=1;i<=20;i++){
//         if(i%2!=0){
//             sum1+=i
//         }
//     }
//     return sum1
// }
// let esummm=odd()
// console.log(esummm)

// 6.Count numbers divisible by 5
// function five(){
//     let count=0
//     for(let i=1;i<=100;i++){
//         if(i%5==0){
//             count+=1
//         }
//     }
//     return count
// }
// let c=five()
// console.log(c)

//7.find the largest
// function largest(){
//     let a=10;
//     let b=20;
//     let c=30
//     if(a>b&&a>c){
//         return a+" is largest"
//     }
//     else if(b>a&&b>c){
//         return b+" is largest"
//     }
//     else{
//         return c+" is largest"
//     }
// }
// let anns=largest()
// console.log(anns)

//8. Find the smallest number
// function small(){
//     let a = 35
//     let b = 12
//     let c = 50
//     if(a<b&&a<c){
//         return a +" is small"
//     }
//     else if(b<a&&b<c){
//         return b+" is  small"
//     }
//     else{
//         return c+" is small"
//     }
// }
// let smallest=small()
// console.log(smallest)

// 9.factorial of 3
// function factt(){
//     let n=3
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     return fact+"  is the factorial of "+ n
// }
// let facCt=factt()
// console.log(facCt)

//10.powers
// function power(){
//     let base=2
//     let p=5
//     let result=1
//     for(let i=1;i<=p;i++){
//         result=result*base
//     }
//     return result
// }
// console.log(power())

// 11.Reverse a number
// function reverse(){
//     let a=123456
//     let rev=0
//     while(a!=0){
//         x=a%10
//         rev=rev*10+x
//         a=parseInt(a/10)
//         if(a==0){
//             break
//         }
//     }
//     return rev
// }
// console.log(reverse())

//12. sum of digits
// function digitsum(){
//     let a=98575
//     let sum=0
//     while(a!=0){
//         x=a%10
//         sum=sum+x
//         a=parseInt(a/10)
//         if(a==0){
//             break
//         }
//     }
//     return sum
// }
// console.log(digitsum())

//13.Check Prime Number
// function prime(){
//     let a=17
//     let count=0
//     for(let i=1;i<=a;i++){
//         if(a%i==0){
//             count++
//         }
//     }
//        if(count==2){
//         return a+"  Prime"
//     }
//     else{
//         return a+"  Not Prime"
//     }
// }
// let xx=prime()
// console.log(xx)

//14.Check Amstrong number
// function amstrong(){
//     let a=153
//     let temp=a
//     let count=0
//     let am=0
//     while(a!=0){
//         x=a%10
//         count++
//         a=parseInt(a/10)
//         if(a==0){
//             break
//         }
//     }
//     a=temp
//     while(a!=0){
//         x=a%10
//         am=am+x**count
//         a=parseInt(a/10)
//           if(a==0){
//             break
//         }
//     }
//   if(temp==am){
//         return temp+"Armstrong"
//     }
//     else{
//         return temp+"Not Armstrong"
//     }
// }
// let u=amstrong()
// console.log(u)

// 15.sum of primes 1to 50
// function primesum(){
//     let sum=0
//     for(let i=1;i<=50;i++){
//         let factt=0
//         for(let j=1;j<=i;j++){
//             if(i%j==0){
//                 factt++
//             }
//         }
//         if(factt==2){
//             sum=sum+i
//         }
//     }
//     return sum
// }
// console.log(primesum())

//Named function with input & with return
// 1.Sum of two numbers
function sum(x,y){
    let sum=x+y
    return x," + ",y," = " , sum
}
console.log(sum(10,20))
//2.Difference of two numbers
function diff(x,y){
    let differ=0
        differ=x-y
        return differ
    }
console.log(diff(20,10))
// 3.Even or odd
function evenodd(x){
    if(x%2==0){
        return x+" Even"
    }
    else{
        return x+" odd"
    }
}
console.log(evenodd(10))
//4.largest of two numbers
function largest(x,y){
    if(x>y){
        return x+" iis largest"
    }
    else{
        return y+" is largest"
    }
}
console.log(largest(10,20))
//5.Largest of three numbers
function three(x,y,z){
    if(x>y&&x>z){
        return x+" is largest"
    }
    else if(y>x&&y>z){
        return y+" is largest"
    }
    else{
        return z+" is largest"
    }
}
console.log(three(9,6,2))
//6.sum of range
function range(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
        sum+=i
    }
    return sum
}
console.log(range(35,50))

//7.factorial
function fact(x){
    let factt=1
    for(let i=1;i<=x;i++){
        factt*=i
    }
    return factt
}
console.log(fact(4))

//8.powerr without **
function power(base,p){
    let result=1
    for(let i=1;i<=p;i++){
        result=result*base
    }
    return result
}
console.log(power(3,2))

//9.Count of even numbers in range
function evenn(x,y){
    let count=0
    for(let i=x;i<=y;i++){
        if(i%2==0){
            count++
        }
    }
    return count
}
console.log(evenn(50,60))

//10.Sum of even numbers in a range
function evennsum(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
        if(i%2==0){
            sum+=i
        }
    }
    return sum
}
console.log(evennsum(1,10))
// 11.Reverse a number
function reverse(x){
    let rev=0
    while(x!=0){
        a=x%10
        rev=rev*10+a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
    return rev
}
console.log(reverse(347265))
// 13.Sum of digits
function summ(x){
    let rev=0
    while(x!=0){
        a=x%10
        rev+=a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
    return rev
}
console.log(summ(347265))
//13.Check Prime
function prime(x){
    let fact=0
    for(let i=1;i<=x;i++){
        if(x%i==0){
            fact+=1
        }
    }
    if(fact==2){
        return x+" is a prime"
    }
    else{
        return x+" is not a prime"
    }
}
console.log(prime(13))

// 14.Check Amstrong
function amstrong(x){
    let temp=x
    let count=0
    let am=0
    while(x!=0){
        a=x%10
        count++
        x=parseInt(x/10)
    }
x=temp
while(x!=0){
    a=x%10
    am=am+a**count
    x=parseInt(x/10)
}
if(temp==am){
    return temp+" is amstrong"
}
else{
    return temp+" is not an amstrong number"
}
}
console.log(amstrong(153))

//15.Sum of Prime Numbers in a Range
function primesum(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
         let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact+=1
        }
    }
    if(fact==2){
        sum=sum+i
    }
}
return sum
}
console.log(primesum(1,100))



