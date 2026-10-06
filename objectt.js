//function with input and without return
function displayobject(phone){
    console.log(phone.model)
    console.log(phone.color)
    console.log(phone.storage)
    console.log(phone.Ram)
    console.log(phone.battery)
    console.log(phone.camera)
}
let phone={
    model:"oppo",
    color:"blue",
    storage:"128gb",
    Ram:"6 GB",
    battery:"5000",
    camera:"100MP"
}
displayobject(phone)

//function with input and with return
function displayobject(phonee){
    console.log(phonee.model)
    console.log(phonee.color)
    console.log(phonee.storage)
    console.log(phonee.Ram)
    console.log(phonee.battery)
    console.log(phonee.camera)
    return phonee;
}
let phonee={
    model:"oppo",
    color:"blue",
    storage:"128gb",
    Ram:"6 GB",
    battery:"5000",
    camera:"100MP"
}
let myphone=displayobject(phonee)
console.log(myphone)

