//Detecting mouse press key

for (var i = 0; i < document.querySelectorAll (".drum").length; i++) {

  document.querySelectorAll (".drum") [i].addEventListener ("click", function () {

    var buttonInnerHTML = this.innerHTML;

    keyPressed (buttonInnerHTML);

    buttonAnimation (buttonInnerHTML);
  });
}

//Detecting keyboard press key

document.addEventListener ("keydown", function (event) {

  keyPressed (event.key);

  buttonAnimation (event.key);
});



//Coomon fucntion for detecting both way key press

function keyPressed (key) {
  switch (key) {
    case "w":
        var drumSound = new Audio ('sounds/tom-1.mp3');
        drumSound.play ();
      break;

    case "a":
        var drumSound = new Audio ('sounds/tom-2.mp3');
        drumSound.play ();
      break;

    case "s":
        var drumSound = new Audio ('sounds/tom-3.mp3');
        drumSound.play ();
      break;

    case "d":
        var drumSound = new Audio ('sounds/tom-4.mp3');
        drumSound.play ();
      break;

    case "j":
        var drumSound = new Audio ('sounds/kick-bass.mp3');
        drumSound.play ();
      break;

    case "k":
        var drumSound = new Audio ('sounds/snare.mp3');
        drumSound.play ();
      break;

    case "l":
        var drumSound = new Audio ('sounds/crash.mp3');
        drumSound.play ();
      break;

    default: console.log (buttonInnerHTML);

  }
}


//Button animation

function buttonAnimation (pressedKey) {

  var activeButton = document.querySelector ("." + pressedKey);

      activeButton.classList.add ("pressed");

  setTimeout (function () {
    activeButton.classList.remove ("pressed"); }, 100);
}
