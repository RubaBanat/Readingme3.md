
alert("Hello World"); 

//var number = 8; 
//alert(number);

//var yourname = prompt("What is your name?");

//function printName(yourname) {
  //alert("Hello "+yourname);

//}
//var password = prompt("insert password");
//function checkPassword(password){
  //  if (password == 0000) {
      //  alert("Logged in");
        //printName(yourname);
    //}// else {
      //  alert("password not correct");
    //}
//}
//checkPassword(password);

let userinput = function () {

let userinput = prompt('please enter your favorite place paris , italy , prague , london');
let item = '' ;
}
while(userinput !== 'paris' && userinput !== 'italy' && userinput !== 'prague' && userinput !== 'london') {
	userinput = prompt('please enter one of those places paris , italy , prague ,london');

}

let howmany = function () {

let count = prompt ("how many you have been there ?")

while(count === "" || isNaN(count)) {
	count = prompt("please enter a number");
}
return count ;
}

