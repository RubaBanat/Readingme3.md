
alert("Hello World"); 

var number = 8; 
alert(number);

var yourname = prompt("What is your name?");

function printName(yourname) {
  alert("Hello "+yourname);

}
var password = prompt("insert password");
function checkPassword(password){
    if (password == 0000) {
        alert("Logged in");
        printName(yourname);
    } else {
        alert("password not correct");
    }
}
checkPassword(password);