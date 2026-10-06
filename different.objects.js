//Named function
//without input and without return

let person={
    name:"Baby",
    age:21,
    course:"python",
    data: function info(){
        console.log(person.name)
        console.log(person.age)
        console.log(person.course)
    }
}
person.data()
//with input and without return
let person1={
    name:"sanju",
    age:23,
    course:"data science",
    data: function info(person1){
        console.log(person1.name)
        console.log(person1.age)
        console.log(person1.course)
    }
}
person1.data(person1)
//without input and with return
let person2={
    name:"ishu",
    age:22,
    course:"FSD java",
    data: function info(){
        console.log(person2.name)
        console.log(person2.age)
        console.log(person2.course)
        return person2
    }
}
let myname=person2.data()
console.log(myname)
//with input and with return
let person3={
    name:"deepu",
    age:24,
    course:"Web development",
    data: function info(person3){
        console.log(person3.name)
        console.log(person3.age)
        console.log(person3.course)
        return person3
    }
}
let mynamee=person3.data(person3)
console.log(mynamee)

//anonymous function
//without input without output
let hi={
    fname:"sowmya",
    salary:50000,
    hii:function(){
        console.log(hi)
    }
}
hi.hii()
//with input and without return
let bike={
    model:"royal enfield",
    price:"2.5lak",
    color:"Black",
    bikee:function(bike){
        console.log(bike)
    }
}
bike.bikee(bike)
//without input and with return
let car={
    model:"BMW",
    price:"2cr",
    color:"grey black",
    carr:function(){
        console.log(car)
        return car
    }
}
console.log(car.carr())
//with input and with return
let laptop={
    model:"HP",
    price:600000,
    color:"grey",
    lap:function(laptop){
        return laptop
    }
}
console.log(laptop.lap(laptop))
//arrow function
// without input and without return
let fullstack={
    courses:"java,python,web development",
    fee:80000,
    time:()=>{
        console.log(fullstack)
    }
}
fullstack.time(fullstack)
//with input and  and without return
let javascript={
    topics:"dom,bom,functios,objects,etc",
    trainer:"vineeth sir",
    js:(javascript)=>{
        console.log(javascript)
    }
}
javascript.js(javascript)
//without input andd withr return
let kukatpally={
    distict:"rangareddy",
    state:"Telangana",
    hyd:()=>{
        return kukatpally
    }
}
console.log(kukatpally.hyd())
//with input and with return
let employee={
    salary:"based on position",
    timing:"9 am to 6 pm",
    duty:(employee)=>{
        return employee
    }
}
console.log(employee.duty(employee))


