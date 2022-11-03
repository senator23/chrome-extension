let a=document.getElementById("counter")
console.log(a);
let count=0

function increment(){
    count++;
    a.textContent=count;
}

let x=document.getElementById("hello")
function save(){
let y = count + " - ";

x.textContent+=y;
}

let y=document.getElementById("error")

function save(){
    y.textContent= "Something went worng!!!"
}