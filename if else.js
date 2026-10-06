function vowel(){
    let ch=(document.getElementById("n1").value);
    let result;
    if(ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"){
        result=ch + " is vowel"
    }
    else{
        result=ch +" is not vowel"
    }
    document.getElementById("n2").value=result;
}

function number(){
    let num=parseInt(document.getElementById("m1").value);
    let result1;
    if(num>=1 && num<=10){
        result1=num + " lies between 1 to 10 "
    }
    else{
        result1=num +" not lies between 1 to 10 "
    }
    document.getElementById("m2").value=result1;
}

function alphabet(){
    let ch=(document.getElementById("nn1").value);
    let result2;
    if(ch>="A" && ch<="Z"){
    result2=ch + " lies between A to Z"
    }
    else{
        result2=ch + " not lies between A to Z"
    }
    document.getElementById("nn2").value=result2;
}

function lowercase(){
    let ch=(document.getElementById("ch1").value);
    let result3;
    if(ch>="a" && ch<="z"){
        result3= ch + " lies between a to z"
    }
    else{
        result3= ch + " not lies between a to z"
    }
    document.getElementById("ch2").value=result3;
}

function alphabets(){
    let ch=(document.getElementById("a1").value);
    let result4;
    if((ch>="a" && ch<="z")||(ch>="A" && ch<="Z")){
        result4= ch + " alphabet"
    }
    else{
        result4=ch + " not alphabet"
    }
    document.getElementById("a2").value=result4;
}

function digit(){
    let number=parseInt(document.getElementById("aa1").value);
    let result5;
    if(number>=-10 && number<=9){
        result5=number + "digit"
    }
    else{
        result5=number + "not digit"
    }
    document.getElementById("aa2").value=result5;
}

function negative(){
    let num=parseInt(document.getElementById("bb1").value);
    let result6;
    if(num<0){
        result6=num + "negative"
    }
    else{
        result6=num + "not negative"
    }
    document.getElementById("bb2").value=result6;
}
function login(){
    let name=(document.getElementById("s1").value);
    let password=(document.getElementById("s2").value);
    let result7;
    if(name== "Hero" && password=="Hero@123" ){
     result7= "login successfully"
    }
    else{
        result7="Invalid credential"
    }
    document.getElementById("s3").value=result7;
}
