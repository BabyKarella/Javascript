//example2
class college{
    static college_name="XYZ"
    static branch="CSE"
    static section="Section B"
    constructor(st_nm,st_id,marks,grade){
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
let student1 =new college("BABY",576,765,"B");
console.log("------student1---------")
student1.displaystudent()
let student2 =new college("sanju",577,665,"c");
console.log("------student2---------")
student2.displaystudent()
let student3 =new college("munnu",578,567,"D");
console.log("------student3---------")
student3.displaystudent()