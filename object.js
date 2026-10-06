//creating completed
let person={
   " na me":"BABY",
  "  ag@e":21,
  "  salary":500000
};
//retrive
console.log(person[" na me"])
console.log(person["  ag@e"])
console.log(person["  salary"])
//update
console.log("Before update age =",person["  ag@e"])
//update
//synatx:objectname[propertyvalue]=changedvalue
person["  ag@e"]=person["  ag@e"]+2
console.log("After update age = ",person["  ag@e"])
//addnew property
console.log("Before updating")
console.log(person)
//adding
//syntax:onjeectname[newpropertyname]=value
person["gen der"]="female"
console.log("After updating")
console.log(person)
//deletion
delete person["  salary"]
console.log("After deletion",person["  salary"])
console.log(person)

//nested onjects
let Innomatics={
  
}