//static example
class Arithmatic{
    //static without input and without return
    static add(){
        let a=30
        let b=40
        console.log("Addition ",a+b)
    }
    //with input without return
    static sub(x,y){
        console.log("substraction of",x,"and",y ,"is",x-y)
    }
    //without input with return
    static mul(){
        let a=10
        let b=20
        return a*b
    }
    //withinput with return
    static mod(a,b){
        let x=a
        let y=b
        return a/b
    }



}
Arithmatic.add()
Arithmatic.sub(50,30)
console.log(Arithmatic.mul())
console.log(Arithmatic.mod(30,5))
