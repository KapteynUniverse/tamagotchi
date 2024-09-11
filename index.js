var button = document.querySelectorAll(".btn");
var buttons = document.querySelectorAll("button");
var x = 0;
var min = 0;
var max = 9;
var click = new Audio("./assets/sounds/click.ogg");
var currentHour = new Date().getHours();
var subTitle = document.getElementById("sub-title");
var character = document.getElementById("character");
// Button handler
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    buttonAnimation(this.innerHTML);
  });
}

// Mouse handler
document.addEventListener("click", function (event) {
  var innerHTMLContent = event.target.innerHTML;
  var clickedButton = Array.from(buttons).find(
    (button) => button.innerHTML === innerHTMLContent
  );
  if (clickedButton) {
    clickedButton.classList.toggle("pressed");
    switchCase(clickedButton.innerHTML);
    click.play();
    setTimeout(() => {
      clickedButton.classList.toggle("pressed");
    }, 100);
  }
});

// Keyboard handler
document.addEventListener("keydown", function (event) {
  var key = event.key.toUpperCase();
  var clickedButton = Array.from(buttons).find(
    (button) => button.innerHTML === key
  );
  console.log(key);
  if (
    key == "A" ||
    key == "S" ||
    key == "D" ||
    key == "ARROWLEFT" ||
    key == "ARROWRIGHT" ||
    key == "ENTER"
  ) {
    buttonAnimation(key);
    setTimeout(() => {
      clickedButton.classList.toggle("pressed");
    }, 100);
    clickedButton.classList.toggle("pressed");
  } else {
    console.log(key);
  }
});

function constrain(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function buttonAnimation(currentKey) {
  if (currentKey === "A" || currentKey === "ARROWLEFT") {
    x--;
    if (x < max) {
      var previousButton = document.querySelector(".btn" + (x + 1));
      if (previousButton) {
        previousButton.classList.toggle("pressed");
        if (x === 0) {
          x = 8;
        }
      } else {
        x = 8;
      }
    }
    console.log(x);
  } else if (currentKey === "D" || currentKey === "ARROWRIGHT") {
    x++;
    if (x > min) {
      var previousButton = document.querySelector(".btn" + (x - 1));
      if (previousButton) {
        previousButton.classList.toggle("pressed");
        if (x === 9) {
          x = 1;
        }
      }
    }
    console.log(x);
  } else {
    var activeButton = document.querySelector(".btn" + x);
    if (activeButton) {
      activeButton.classList.toggle("pressed");
      switchCase(activeButton.innerHTML);
    }
    x = 0;
  }
  click.play();

  x = constrain(x, min, max);

  var activeButton = document.querySelector(".btn" + x);
  if (activeButton) {
    activeButton.classList.toggle("pressed");
  }
}

if (currentHour >= "0" && currentHour <= "6") {
  subTitle.innerHTML = "Good Night";
  subTitle.style.color = "white";
} else if (currentHour >= "7" && currentHour <= "10") {
  subTitle.innerHTML = "Good Morning";
  subTitle.style.color = "black";
} else {
  subTitle.innerHTML = "Have a nice day";
  subTitle.style.color = "black";
}

function switchCase(button) {
  switch (button) {
    case "Q":
      character.src = "./assets/character/naked-idle.png";
      character.style.width = "calc(416px * var(--pixel-size)";
      character.style.animation = "moveSpritesheet 1.3s steps(13) infinite";
      break;
    case "W":
      character.src = "./assets/character/idle.png";
      character.style.width = "calc(416px * var(--pixel-size)";
      character.style.animation = "moveSpritesheet 1.3s steps(13) infinite";
      break;
    case "E":
      character.src = "./assets/character/attack.png";
      character.style.width = "calc(320px * 4)";
      character.style.animation = "moveSpritesheet 1s steps(10) infinite";
      break;
    case "R":
      character.src = "./assets/character/study.png";
      character.style.width = "calc(192px * 4)";
      character.style.animation = "moveSpritesheet 0.8s steps(6) infinite";
      break;
    case "T":
      character.src = "./assets/character/jump.png";
      character.style.width = "calc(192px * 4)";
      character.style.animation = "moveSpritesheet 0.8s steps(6) infinite";
      break;
    case "Y":
      character.src = "./assets/character/roll.png";
      character.style.width = "calc(160px * 4)";
      character.style.animation = "moveSpritesheet 0.6s steps(5) infinite";
      break;
    case "U":
      character.src = "./assets/character/sick-1.png";
      character.style.width = "calc(128px * 4)";
      character.style.animation = "moveSpritesheet 0.8s steps(4) infinite";

      break;
    case "I":
      character.src = "./assets/character/sleep.png";
      character.style.width = "calc(96px * 4)";
      character.style.animation = "moveSpritesheet 0.8s steps(3) infinite";
      break;

    default:
      break;
  }
}
