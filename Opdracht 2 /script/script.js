/*
function achtergrondverander() {
    var element = document.getElementById("beeld");
    element.classList.add("changeBackground");
    console.log('WerkDan')
}

window.addEventListener("scroll", achtergrondverander);

*/

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");




window.setInterval(function (){
  if (window.scrollY == 0) {
    console.log('testje');
    document.getElementById("first").style.backgroundImage = "url('img/Surfer.jpg')";
  }
  if (window.scrollY > 400) {
    console.log('testje3');
    document.getElementById("first").style.backgroundImage = "url('img/Footballers.jpg')";
  }
  else {
    console.log('scrollololo');
    document.getElementById("first").style.backgroundImage = "url('img/Basketball_Player.jpg')";
  }
  /// call your function here
}, 500);








/*
// Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("beeld");
//var length = triangle.getTotalLength();


// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var change = triangle.classList.add("changeBackground");
  console.log('WerkDan')
}
}
/*

var scrollbovenkant = document.getElementById("first");

function ChangeBackgroundNow() {
  if scrollbovenkant.scrollTop =0 {
    console.log('WerkDan')
  }
  else {
    console.log('geenZin')
  }
}


*/




/*



var position2 = document.getElementById('beeld');

if (position2.scrollTop = 0) {
    console.log('test');
}








var bovenelement = document.getElementById("second").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / bovenelement);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/times-square-perspective.jpg) no-repeat";
  }
}
*/
