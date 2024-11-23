// JavaScript source code

let name = 'piris';
const lName = 'abuzahra';
let middleName = 'null';
console.log(name);
console.log(middleName);
console.log(lName);

let cousins = {
    oldest:"mutea",
    smartest:'firas',
    middle:'ayham',
    cutest:'omar',
    boss:'zaid'
};

console.log(cousins);
console.log(cousins.smartest + " is savage");

function toFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

console.log("10 degrees C is", toFahrenheit(10),"F");

var online = true;
if (online) {
    console.log("piris is online");
}
else {
    console.log("piris is offline");
}

function doSomething() {
            if (document.getElementById("test").innerHTML == "Hello!") {
                document.getElementById("test").innerHTML = "Goodbye!";
            }
            else { document.getElementById("test").innerHTML = "Hello!"; }
        }