//Check whether a given number is a 3-digit number or not.
let n=345
if(n>=100){
    console.log("given",n, "is 3 digit number")
}
else{
    console.log("given",n, "is not 3 digit number")
}
//Check whether a given number is divisible by both 3 and 5 or not.
let n1=15
if(n1%3==0 && n1%5==0){
    console.log("given" ,n1, "is divisible by both 3 and 5")
}
else{
    console.log("given",n1, "is not divisible by both 3 and 5")
}
//Check whether a given triangle is a valid triangle or not.
let a=60
let b=50
let c=70
if(a+b>c && a+c>b && b+c>a){
    console.log("valid triangle")
}
else{
    console.log("not valid")
}
//whether a given number is a multiple of 10 or not.
let a1=200
if(a1%10==0){
    console.log("given",a1, "is divisiable by 10")
}
else{
    console.log("given",a1, "is not divisiable by 10")
}
//Check the type of triangle based on its sides
let b1=60
let b2=60
let b3=90
if(b1==b2 && b2==b3 && b3==b1){
    console.log("Equilateral Triangle")
}
else if(b1==b2 || b2==b3 || b3==b1){
    console.log("Isosceles Triangle")
}
else{
    console.log("Scalene Triangle")
}
//Calculate the electricity bill based on units consumed.
  //  0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit
  let bill=340
  if (bill<100){
    console.log("₹2/unit")
  }
  else if(bill<200){
    console.log("₹3/units")
  }
  else if(bill<300){
    console.log("₹5/units")
  }
  else if(bill>300){
    console.log("₹7/units")
  }
  else{
    console.log("wrong bill")
  }
  //Display the age category.
   // Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
  let age=40
  if(age<13){
    console.log("child")
  }
  else if(age>13 && age<20){
    console.log("teenager")
  }
  else if(age>20 && age<60){
    console.log("Adult")
  }
  else if(age>60){
    console.log("senior citizen")
  }
  else{
    console.log("Invalid age")
  }
  //Calculate the discount based on shopping amount.
    //Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
     let amount=4000
     if(amount<1000){
        console.log("no discount")
     }
     else if(amount>1000 && amount<5000){
        discount=amount*(10/100);
        console.log("discount =",discount,)
     }
     else if (amount>5000 && amount<10000){
        discount=amount*(20/100);
        console.log("discount =" ,discount,)
     }
     else if(amount>10000){
        discount=amount*(30/100);
        console.log("discount =" ,discount,)
     }
     else{
        console.log("wrong amount")
     }
     //Display the season based on the month number.
    //3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
    let s=11
    if(s>=3 && s<=5){
        console.log("spring")
    }
    else if(s>=6 && s<=8){
        console.log("summer")
    }
    else if(s>=9 && s<=11){
        console.log("Autum")
    }
    else if(s==12 || s>=1 && s<=2){
        console.log("winter")
    }
    else{
        console.log("invalid")
    }
    //Check whether a given year is a Leap Year or not.
    //Condition 1: year % 400 == 0
    //Condition 2: year % 4 == 0 and year % 100 != 0
    let year=2000
    if(year%400==0){
      console.log("leap year")
    }
    else if(year%4==0 && year%100!=0){
      console.log("leap year")
    }
    else{
      console.log("not leap year")
    }
    //Check whether a person is eligible to donate blood.
    //Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
    let agee=24
    let weight=56
    if(agee>=18 && agee<=60){
      if(weight>50){
        console.log("eligible by age, weight should be above 50 kg.")
      }
      else{
        console.log("eligible by age, weight  not should be above 50 kg.")
      }
    }
    else{
     console.log("not eligible")
    }
//Display the grade based on average only if the student has passed in all 4 subjects.
   let sub1 = 70;
   let sub2 = 80;
   let sub3 = 99;
   let sub4 = 67;

  let avg = (sub1 + sub2 + sub3 + sub4) / 4;

if (sub1 >= 35 && sub2 >= 35 && sub3 >= 35 && sub4 >= 35) {

    if (avg >= 90) {
        console.log("Grade A");
    }
    else if (avg >= 75) {
        console.log("Grade B");
    }
    else if (avg >= 60) {
        console.log("Grade C");
    }
    else if (avg >= 35) {
        console.log("Grade D");
    }
    else {
        console.log("Student Fail");
    }

}
else {
    console.log("Student Fail");
}
    

    //Check whether a student is eligible for a scholarship.
    //Age should be above 18. If eligible by age, score should be above 86.
    let ageee=20
    let score=80
    if(ageee>18){
      if(score>86){
        console.log("eligible by age, score should be above 86.")
      }
      else{
        console.log("eligible by age, score  should  not be above 86.")
      }
    }
    else{
     console.log("not eligible")
    }


