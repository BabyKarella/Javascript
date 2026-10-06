function number(){
  let n=parseInt(document.getElementById("num1").value);
  let result;
  if(n>0){
    result=n+"is positive"
  }
  else if(n<0){
    result=n+"is negative"
  }
  else{
    result=n+"is Zero"
  }
  document.getElementById("res").value=result
}
function small(){
  let num1=parseInt(document.getElementById("n1").value);
  let num2=parseInt(document.getElementById("n2").value);
  let result;
  if(num1<num2){
    result=num1 +"is smallest"
  }
  else if(num2<num1){
    result=num2 +"is smallest"
  }
  else{
    result="Both are equal"
  }
  document.getElementById("n3").value=result;
}

function divisiable(){
  let n1=parseInt(document.getElementById("nn1").value);
  let result1;
  if(n1%5==0){
    result1=n1+ "is divided by 5"
  }
  else{
    result1=n1+ "is not divided by 5"
  }
  document.getElementById("nn2").value=result1;
}

function even(){
  let m1=parseInt(document.getElementById("mm1").value);
  let result2;
  if(m1%2==0){
   result2=m1+"is even"
  }
 else{
  result2=m1+"is odd"
 }
 document.getElementById("mm2").value=result2;
}

function bill(){
  let bill=parseInt(document.getElementById("b1").value);
  let dis_percentage=parseInt(document.getElementById("b2").value);
  let total_bill;
  let discount;
  if(bill>5000){
    discount=bill*(dis_percentage/100)
    total_bill=bill-discount
  }
  else{
    total_bill=bill
  }
  document.getElementById("b3").value=total_bill;
}
