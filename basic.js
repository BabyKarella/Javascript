//adding two numbers
function addtwo(){
    let n1= parseInt( document.getElementById("num1").value);
    let n2=parseInt( document.getElementById("num2").value);
let sum = n1+n2;
document.getElementById("res").value=sum;
 
}

//Average of three numbers
// let n1=10;
// let n2=20;
// let n3=30;
// let sum = n1 + n2+ n3;
// let avg =sum/3;
// console.log(avg)

function avg(){
    let a1=parseInt(document.getElementById("avg1").value);
    let a2=parseInt(document.getElementById("avg2").value);
    let a3=parseInt(document.getElementById("avg3").value);
    let avg=(a1+a2+a3)/3;
    document.getElementById("avg4").value=avg;
}

//sum of first n natural numbers
// let n=20;
// let sum = n * n+1/2;
// console.log(sum);

function sum(){
    let n=parseInt(document.getElementById("nn1").value);
    let sum=n*(n+1)/2;
    document.getElementById("nn2").value=sum;
}

//avg of first n natural numbers
// let n=5
// let sum= n * (n+1)/2;
// let avg= sum/n;
// console.log(avg);

function avgg(){
    let n=parseInt(document.getElementById("aa1").value);
    let sum=n*(n+1)/2;
    let avg=sum/n;
    document.getElementById("aa2").value=avg;
}

//missing angle in triangle
// let a1=60
// let a2=50
// let sum=a1+a2;
// let angle=180-sum;
// console.log(angle);

function triangle(){
    let n1=parseInt(document.getElementById("ang1").value);
    let n2=parseInt(document.getElementById("ang2").value);
    let sum=n1+n2;
    let angle=180-sum;
    document.getElementById("ang3").value=angle;
}

//profit percentage
// let sp=450
// let cp=300
// let sum=sp-cp;
// let pp=(sum/cp)*100;
// console.log(pp);

function pp(){
    let sp=parseInt(document.getElementById("sp1").value);
    let cp=parseInt(document.getElementById("cp1").value);
    let sum=sp-cp;
    let pp=(sum/cp)*100;
    document.getElementById("si").value=pp;
}

//simple interest
// let p=20000
// let r=3
// let t=4
// let mul=p*r*t;
// let SI=mul/100;
// console.log(SI);

function SI(){
    let p=parseInt(document.getElementById("p1").value);
    let r=parseInt(document.getElementById("r1").value);
    let t=parseInt(document.getElementById("t1").value);
    let si=(p*r*t)/100;
    document.getElementById("s1").value=si;
    
}



 
 
