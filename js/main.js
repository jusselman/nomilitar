// This piece generates rando numbers betwixt 1 and 20 //
var fartFace = Math.floor((Math.random()* 20 )+ 1)


//Capitalization signifies a Constructor Function //
var date = new Date();

// Current year is console //

var annual = new Date().getFullYear();
var ampm = 'am';
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
if(currentHour > 12) {
  currentHour = currentHour - 12;
  ampm = 'pm';
}

document.querySelector('#btn').addEventListener("click", function() {
  alert("The current hour is " + currentHour + ":" + currentMinute + ampm);
})

var numArray = [6.05, 4.66, 5.45, 1.29, .35]

for(var i = 0 ; i <numArray.length; i++) {

    console.log(Math.round(numArray[i]))
}

// Set Time Out //

// setTimeout( function() {
//   alert("The current hour is " + currentHour + ampm);
// }, 2000);
