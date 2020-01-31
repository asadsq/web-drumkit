// --- * Begin your js file below * ----

// get all the buttons
var myArray = document.querySelectorAll("button");

// Detecting a mouse click
for (var i = 0; i < myArray.length; i++) {

  // you use the anonymous func here, without any parameters
  myArray[i].addEventListener("click", function() {
    
    // this refers to which button was clicked
    console.log(this.innerHTML);

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    addAnimation(buttonInnerHTML);

  });      
}

// Detecting a keyboard press
document.addEventListener("keydown", function(event) {      // here you call the anonymous func with a parameter
  
  // what key was pressed
  //console.log(event.key);

  var keyPressed = event.key;
  makeSound(keyPressed);

  addAnimation(keyPressed);

});

// takes in a letter or a char
function addAnimation (currentKey) {

  // construct the class name
  var myClassSelector = "." + currentKey;       // .w
  
  // get the element that you need, using that class selector
  var activeButton = document.querySelector(myClassSelector);
  
  // add the shadow effect
  activeButton.classList.add("pressed");

  // this guys takes in two inputs-- 
  // 1) a func that tells you what to do when the timer runs out, and 
  // 2) the timeout interval in millisecs
  setTimeout(function () {
    
   activeButton.classList.remove("pressed");

  }, 100 );

}

// tells you what to do once the click happens
function makeSound (key) {  
  switch (key) {

    case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();     
      break;
  
    case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;
      
    case "d" : 
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j" : 
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
      break;

    case "k" : 
      var kickBass = new Audio ("sounds/kick-bass.mp3");
      kickBass.play();
      break; 
    
    case "l" : 
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
      break;
      
    default:
      console.log(key);
      break;
  }    

}