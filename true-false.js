//'0' is false
const age = 0;
if(age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//checking string length:true
const myName = "Mahfuz";
if(myName.length > 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//checking string length:false
const name = "";
if(name.length > 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//undefined
let city;
console.log(city);

//Null is false
const money = null;
if(money){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//'NaN' - Not a Number:false
const anyNum = NaN;
if(anyNum){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//empty array is true
const newArray = [];
if(newArray){
    console.log("array condition is true");
}
else{
    console.log("array condition is false");
}

//A object without property is true
const newObj = {};
if(newObj){
    console.log("Object condition is true");
}
else{
    console.log("Object condition is false");
}
