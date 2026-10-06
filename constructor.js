//example1
class laptop{
    static lapto_brand="XYZ"
    static categroy="Electronics"
    constructor(model,processor,ram,stroage,price,color){
        this.mylaptop=model;
        this.myprocessor=processor;
        this.myram=ram;
        this.mystroage=stroage;
        this.myprice=price;
        this.mycolor=color;
    }
    displaylaptop(){
        console.log("My Laptop brand",laptop.lapto_brand)
        console.log("My categroy",laptop.categroy)
        console.log("My Laptop",this.mylaptop)
        console.log("My processor",this.myprocessor)
        console.log("My Ram",this.myram)
        console.log("My stroage",this.mystroage)
        console.log("My price",this.myprice)
        console.log("My color",this.mycolor)
           
    }
}
let customer1 =new laptop("HP","i5","16Ram",512,55000,"Grey");
console.log("------customer1---------")
customer1.displaylaptop()
let customer2 =new laptop("Dell","i3","16Ram",8,45000,"Black");
console.log("------customer2---------")
customer2.displaylaptop()
let customer3 =new laptop("Macbook","i7","16Ram",12,95000,"White");
console.log("------customer3---------")
customer3.displaylaptop()

//example2
class college{
    static college_name="XYZ"
    static branch="CSE"
    constructor(st_nm,st_id,marks,grade,section){
        this.myname=st_nm;
        this.myId=st_id;
        this.mymarks=marks;
        this.mygrade=grade;
        this.mysection=section;

    }
    displaystudent(){
        console.log("My college",college.college_name)
        console.log("My branch",college.branch)
        console.log("My name",this.myname)
        console.log("My ID",this.myId)
        console.log("My marks",this.mymarks)
        console.log("My grade",this.mygrade)
         console.log("My section",this.mysection)
    }
}
let student1 =new college("BABY",576,765,"B","B section");
console.log("------student1---------")
student1.displaystudent()
let student2 =new college("sanju",577,665,"c","A section");
console.log("------student2---------")
student2.displaystudent()
let student3 =new college("munnu",578,567,"D","C section");
console.log("------student3---------")
student3.displaystudent()

//example3
class res{
    static res_name="AVG"
    static loaction="Bvrm"
    constructor(item,category,price,quantity,rating,available){
        this.myitem=item;
        this.mycategory=category;
        this.myprice=price;
        this.myquantity=quantity;
        this.myrating=rating;
        this.Avilable=available;

    }
    displaymenu(){
        console.log("My Resturant",res.res_name)
        console.log("My Loaction",res.loaction)
        console.log("My Items",this.myitem)
        console.log("My Category",this.mycategory)
        console.log("My Price",this.myprice)
        console.log("My Rating",this.myrating)
        console.log("Available",this.Avilable)
    }
}
let customer11 =new res("Biryani","Main course",1000,2,"5star","Available");
console.log("------customer1---------")
customer11.displaymenu()
let customer22 =new res("Chilly chicken","starters course",1500, 3,"5 star","Available");
console.log("------customer2---------")
customer22.displaymenu()
let customer33 =new res("chicken lolipops","starters course",2500,4,"5 star","Available");
console.log("------student3---------")
customer33.displaymenu()







