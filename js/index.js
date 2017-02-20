$(document).ready(function(){

setTimeout(redLight,1000);
setTimeout(greenLight,1000);
setTimeout(yellowLight,2000);

function redLight(){
  $("#first").removeClass("red");
}

function greenLight(){
  $("#second").addClass("green");
}

function yellowLight(){
  $("#second").removeClass("green");
  $("#third").addClass("yellow");
}

})
