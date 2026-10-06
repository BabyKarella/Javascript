//example1
class college{
    static college_name="XYZ"
    static branch="CSE"
    static section="Section B"
    get_dataa(st_nm,st_id,marks,grade){
        this.myname=st_nm;
        this.myId=st_id;
        this.mymarks=marks;
        this.mygrade=grade;
    }
    displaystudent(){
        console.log("My college",college.college_name)
        console.log("My branch",college.branch)
        console.log("My section",college.section)
        console.log("My name",this.myname)
        console.log("My ID",this.myId)
        console.log("My marks",this.mymarks)
        console.log("My grade",this.mygrade)
    }
}
let student1 =new college();
console.log("------student1---------")
student1.get_dataa("BABY",576,765,"B")
student1.displaystudent()
let student2 =new college();
console.log("------student2---------")
student2.get_dataa("sanju",577,665,"c")
student2.displaystudent()
let student3 =new college();
console.log("------student3---------")
student3.get_dataa("munnu",578,567,"D")
student3.displaystudent()

//example2
class app{
    static App="INSTAGRAM"
    static Feature="setting"
    static profile="Edit profile"
    get_dataa(acc_name,acc_id,acc_post,acc_highlights){
        this.myname=acc_name;
        this.myId=acc_id;
        this.mypost=acc_post;
        this.myhighlights=acc_highlights;
    }
    displayInsta(){
        console.log("My Instagram",app.App)
        console.log("My accfeatures",app.Feature)
        console.log("My Profile",app.profile)
        console.log("My name",this.myname)
        console.log("My ID",this.myId)
        console.log("My posts",this.mypost)
        console.log("My highlights",this.myhighlights)
    }
}
let user11 =new app();
console.log("------user1---------")
user11.get_dataa("baby","babykarell@33",30,20)
user11.displayInsta()
let user22 =new app();
console.log("------user2---------")
user22.get_dataa("sanju","sanju@342",665,770)
user22.displayInsta()
let user33 =new app();
console.log("------user3---------")
user33.get_dataa("munnu","munnu@578",7,40)
user33.displayInsta()
let user44 =new app();
console.log("------user4---------")
user44.get_dataa("junnu","junnu@978",77,80)
user44.displayInsta()

//example3

class village{
    static villName="Bhimavaram"
    static district="West godavari"
    get_dataa(per_name,hous_num,age,phonenum,adharnum){
        this.myname=per_name;
        this.myhouse=hous_num;
        this.myage=age;
        this.myphonenum=phonenum;
        this.myadharnum=adharnum;
    }
    displayvillage(){
        console.log("My village",village.villName)
        console.log("My district",village.district)
        console.log("My name",this.myname)
        console.log("My House num",this.myhouse)
        console.log("My age",this.myage)
        console.log("My phonenum",this.myphonenum)
        console.log("My adharnum",this.myadharnum)
    }
}
let person1 =new village();
console.log("------person1---------")
person1.get_dataa("baby",182,21,6573987768,223867689877)
person1.displayvillage()
let person2 =new village();
console.log("------person2---------")
person2.get_dataa("chitti",567,18,9888787770,386445768987)
person2.displayvillage()
let person3 =new village();
console.log("------person3---------")
person3.get_dataa("Prabha",675,28,9348998660,223447689877)
person3.displayvillage()
let person4 =new village();
console.log("------person4---------")
person4.get_dataa("Nani",342,25,8255657980,223867009877)
person4.displayvillage()



