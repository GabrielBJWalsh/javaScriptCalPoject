//calculator 
var screen = document.getElementById("screen");
var screenData = document.getElementById("screen").innerHTML;
function clear(){}
function one(){screen.innerHTML = screenData + 1;}
function two(){screen.innerHTML = 2; }
function three(){screen.innerHTML = 3;}
function four(){screen.innerHTML = 4;}
function five(){screen.innerHTML = 5;}
function six(){screen.innerHTML = 6;}
function seven(){screen.innerHTML = 7;}
function eight(){screen.innerHTML = 8;}
function nine(){screen.innerHTML = 9;}
function zero(){screen.innerHTML = 0; }
function point(){screen.innerHTML = ".";}
function equal(){screen.innerHTML = "";}
function plus(){screen.innerHTML = "";}
function minus(){screen.innerHTML = "";}
function divide(){screen.innerHTML = "";}
function multiply(){screen.innerHTML = "";}



















//caloriesBurned



function meFunction()
{

var weight = document.getElementById("myWeight").value;
var disdance = document.getElementById("myDistance").value; 
var caloriesBurned = parseInt(weight)*parseInt(disdance)*0.653;
document.getElementById("Fdiff").value = caloriesBurned;
if (caloriesBurned < 100)
{document.getElementById("comment").value ="you better start working"}
if (caloriesBurned > 100 && caloriesBurned < 200)
{document.getElementById("comment").value ="nice run but you can do better"}
if (caloriesBurned > 200 && caloriesBurned < 300)
{document.getElementById("comment").value ="Very good try and go above 300"}
if (caloriesBurned > 300 && caloriesBurned < 500)
{document.getElementById("comment").value ="Great your a runner... keep it up"}
if (caloriesBurned > 500 && caloriesBurned < 700)
{document.getElementById("comment").value = "move over Usain Bolt"}
if (caloriesBurned > 700)
{document.getElementById("comment").value ="Great have a TRIPPLE CHOCOLATE CAKE"}
}




//ght * distance * 0.653) an