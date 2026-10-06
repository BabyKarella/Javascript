//print number from 1 lakh to 2lakh
for (let i=100000;i<=200000;i=i+1){
    console.log(i)
}

//Print the sequence: 1 4 9 16 25 36 49 ... 100
for (let i=1;i<=10;i=i+1){
    console.log(i*i)
}

//Print the sequence: 1 8 27 64 125 216 ... 1000
for(let i=1;i<=10;i=i+1){
    console.log(i**3)
}

//Print numbers from 5 lakh to 4 lakh in reverse order.
for (let i=500000;i>=400000;i=i-1){
    console.log(i)
}

//Print the sequence: 2.5 2 1.5 1 0.5
for (let i=2.5; i>=0.5;i=i-0.5){
    console.log(i)
}
//fabonacci series
let n1=0
let n2=1
for(let i=1;i<=10;i=i+1){
 let feb=n1+n2
    n1=n2
    n2=feb  
    console.log(feb)
}