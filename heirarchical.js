//1.without using constructor
class Animal{
    eat(){
        console.log("Animals can eat");
    }
}
class Dog extends Animal{
    bark(){
        console.log("Dog can bark");
    }
}
class Cat extends Animal{
    meow(){
        console.log("Cat can meow");
    }
}
let d=new Dog();
d.eat();
d.bark();
let c=new Cat();
c.eat();
c.meow();

//example2
class Vehicle{
    start(){
        console.log("Vehicle starts");
    }
}
class Car extends Vehicle{
    drive(){
        console.log("Car is driving");
    }
}
class Bike extends Vehicle{
    ride(){
        console.log("Bike is riding");
    }
}
let a = new Car();
a.start();
a.drive();
let b = new Bike();
b.start();
b.ride();

//3.using constructor
class employee{
    constructor(name,company){
        this.name=name;
        this.company=company;
    }

    displayemp(){
    console.log("NAME:",this.name);
    console.log("Company:",this.company);
}
}
class devel extends employee{
    coder(){
        console.log(this.name,"Writes code")
    }
}
class tester extends employee{
    test(){
        console.log(this.name,"tester")
    }
}
let f=new devel("Baby","IBM")
f.displayemp();
f.coder();
let g=new tester("Sanju","Infosys")
g.displayemp();
g.test();

//example4
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
    }
}
class Student extends Person{
    study(){
        console.log(this.name,"is studying");
    }
}
class Teacher extends Person{
    teach(){
        console.log(this.name,"is teaching");
    }
}
let s = new Student("Surendra",22);
s.display();
s.study();
let t = new Teacher("sravani",35);
t.display();
t.teach();
//example 5
class Bank{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }
    displaybank() {
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }
}
class SavingsAccount extends Bank{
    save(){
        console.log(this.name, "has a savings account");
    }
}
class CurrentAccount extends Bank{
    business(){
        console.log(this.name, "has a current account");
    }
}
let y=new SavingsAccount("sravanthi", 50000);
y.displaybank();
y.save();
let z=new CurrentAccount("Baby", 100000);
z.displaybank();
z.business();