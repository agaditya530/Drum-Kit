//
// document.querySelector("button").addEventListener("click", handleClick);//listen for click and call function without paranthesis
//
//
// function handleClick(){//or can be used as anaonysmous funtion
//   alert("I got clicked!");
// }
//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for( var i =0; i<numberOfDrumButtons; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}



//Detecting keyboard presses

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key)
   {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");//new audio object that in liked to Audio- contruction function which add ton-1.mp3 to the funciton and then we play through object.
      tom1.play();// tom1 is the new obejct of audio contruction fuction and calling play.
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}




// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
