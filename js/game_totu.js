Exit_2.onclick = function () {
  location.reload();
};

/* select character */

selectorPlayer.onclick = function () {
  SelectCharacter.className = "showSelector";
};

BlueCharacter.onclick = function () {
  cup1.style.display = "none";
  cup2.style.display = "block";
  cup1_game.style.display = "none";
  cup2_game.style.display = "block";

  SelectCharacter.className = "hideSelector";
};
RedCharacter.onclick = function () {
  cup2.style.display = "none";
  cup1.style.display = "block";
  cup2_game.style.display = "none";
  cup1_game.style.display = "block";

  SelectCharacter.className = "hideSelector";
};

/* const cup1 = document.getElementById("cup1"); */
var cup1Position = 170;
cup1.style.left = cup1Position + "px";
var cup2Position = 170;
cup2.style.left = cup2Position + "px";

function go_right(x) {
  if (cup1Position < 1301) {
    cup1Position = cup1Position + x;
    cup1.style.left = cup1Position + "px";
    cup2Position = cup2Position + x;
    cup2.style.left = cup2Position + "px";

    GameIsDone();

    console.log(cup1Position);
  }
}

function go_left(x) {
  if (cup1Position > -20) {
    cup1Position = cup1Position - x;
    cup1.style.left = cup1Position + "px";
    cup2Position = cup2Position - x;
    cup2.style.left = cup2Position + "px";

    //console.log(cup1Position);
  }
}

document.addEventListener("keydown", (e) => {
  if (/* press D */ e.keyCode == 68) {
    go_right(10);
    go_right_asli(10);
    cup1.className = "walkingRightRed";
    cup2.className = "walkingRightBlue";
    cup1_game.className = "walkingRightRed";
    cup2_game.className = "walkingRightBlue";
  } /* press A */ else if (e.keyCode == 65) {
    go_left(10);
    go_left_asli(10);
    cup1.className = "walkingLeftRed";
    cup2.className = "walkingLeftBlue";
    cup1_game.className = "walkingLeftRed";
    cup2_game.className = "walkingLeftBlue";
  } /* press shift */ else if (e.keyCode == 16) {
    PressBottomActionAudio.play();
    switch (cup1.className) {
      case "waitRightRed":
        cup1.className = "dashRightRed";
        cup1_game.className = "dashRightRed";
        for (i = 0; i < 20; i++) {
          go_right(5);
          go_right_asli(5);
        }
        setTimeout(() => {
          cup1.className = "waitRightRed";
          cup1.className = "waitRightRed";
          cup1_game.className = "waitRightRed";
          cup1_game.className = "waitRightRed";
        }, 200);
        break;
      case "walkingRightRed":
        cup1.className = "dashRightRed";
        cup1_game.className = "dashRightRed";
        for (i = 0; i < 20; i++) {
          go_right(5);
          go_right_asli(5);
        }
        setTimeout(() => {
          cup1.className = "waitRightRed";
          cup1_game.className = "waitRightRed";
        }, 200);
        break;
      case "jumpingRightRed":
        cup1.className = "dashRightRed";
        cup1_game.className = "dashRightRed";
        for (i = 0; i < 20; i++) {
          go_right(5);
          go_right_asli(5);
          cup1.style.top = "350px";
          cup1_game.style.top = "350px";
        }
        setTimeout(() => {
          cup1.className = "waitRightRed";
          cup1.style.top = "440px";
          cup1_game.className = "waitRightRed";
          cup1_game.style.top = "440px";
        }, 200);
        break;
      case "jumpingLeftRed":
        cup1.className = "dashLeftRed";
        cup1_game.className = "dashLeftRed";
        for (i = 0; i < 20; i++) {
          go_left(5);
          go_left_asli(5);
          cup1_game.style.top = "350px";
        }
        setTimeout(() => {
          cup1.className = "waitLeftRed";
          cup1.style.top = "440px";
          cup1_game.className = "waitLeftRed";
          cup1_game.style.top = "440px";
        }, 200);
        break;
      case "waitLeftRed":
        cup1.className = "dashLeftRed";
        cup1_game.className = "dashLeftRed";
        for (i = 0; i < 20; i++) {
          go_left(5);
          go_left_asli(5);
        }
        setTimeout(() => {
          cup1.className = "waitLeftRed";
          cup1_game.className = "waitLeftRed";
        }, 200);
        break;
      case "walkingLeftRed":
        cup1.className = "dashLeftRed";
        cup1_game.className = "dashLeftRed";
        for (i = 0; i < 20; i++) {
          go_left(5);
          go_left_asli(5);
        }
        setTimeout(() => {
          cup1.className = "waitLeftRed";
          cup1_game.className = "waitLeftRed";
        }, 200);
        break;
    }
    switch (cup2.className) {
      case "waitRightBlue":
        cup2.className = "dashRightBlue";
        cup2_game.className = "dashRightBlue";
        for (i = 0; i < 20; i++) {
          go_right(5);
          go_right_asli(5);
        }
        setTimeout(() => {
          cup2.className = "waitRightBlue";
          cup2_game.className = "waitRightBlue";
        }, 200);
        break;
      case "walkingRightBlue":
        cup2.className = "dashRightBlue";
        cup2_game.className = "dashRightBlue";
        for (i = 0; i < 20; i++) {
          go_right(5);
          go_right_asli(5);
        }
        setTimeout(() => {
          cup2.className = "waitRightBlue";
          cup2_game.className = "waitRightBlue";
        }, 200);
        break;
      case "jumpingRightBlue":
        cup2.className = "dashRightBlue";
        cup2_game.className = "dashRightBlue";
        for (i = 0; i < 20; i++) {
          go_right(5);
          go_right_asli(5);
          cup2.style.top = "350px";
          cup2_game.style.top = "350px";
        }
        setTimeout(() => {
          cup2.className = "waitRightBlue";
          cup2.style.top = "440px";
          cup2_game.className = "waitRightBlue";
          cup2_game.style.top = "440px";
        }, 200);
        break;
      case "jumpingLeftBlue":
        cup2.className = "dashLeftBlue";
        cup2_game.className = "dashLeftBlue";
        for (i = 0; i < 20; i++) {
          go_left(5);
          go_left_asli(5);
          cup2.style.top = "350px";
          cup2_game.style.top = "350px";
        }
        setTimeout(() => {
          cup2.className = "waitLeftBlue";
          cup2.style.top = "440px";
          cup2_game.className = "waitLeftBlue";
          cup2_game.style.top = "440px";
        }, 200);
        break;
      case "waitLeftBlue":
        cup2.className = "dashLeftBlue";
        cup2_game.className = "dashLeftBlue";
        for (i = 0; i < 20; i++) {
          go_left(5);
          go_left_asli(5);
        }
        setTimeout(() => {
          cup2.className = "waitLeftBlue";
          cup2_game.className = "waitLeftBlue";
        }, 200);
        break;
      case "walkingLeftBlue":
        cup2.className = "dashLeftBlue";
        cup2_game.className = "dashLeftBlue";
        for (i = 0; i < 20; i++) {
          go_left(5);
          go_left_asli(5);
        }
        setTimeout(() => {
          cup2.className = "waitLeftBlue";
          cup2_game.className = "waitLeftBlue";
        }, 200);
        break;
    }
  } /* press spase */ else if (e.keyCode == 32) {
    jumpsound.play();
    switch (cup1.className) {
      case "waitRightRed":
        cup1.className = "jumpingRightRed";
        cup1_game.className = "jumpingRightRed";
        setTimeout(() => {
          cup1.className = "waitRightRed";
          cup1_game.className = "waitRightRed";
        }, 1100);
        break;
      case "waitLeftRed":
        cup1.className = "jumpingLeftRed";
        cup1_game.className = "jumpingLeftRed";
        setTimeout(() => {
          cup1.className = "waitLeftRed";
          cup1_game.className = "waitLeftRed";
        }, 1100);
        break;
    }
    switch (cup2.className) {
      case "waitRightBlue":
        cup2.className = "jumpingRightBlue";
        cup2_game.className = "jumpingRightBlue";
        setTimeout(() => {
          cup2.className = "waitRightBlue";
          cup2_game.className = "waitRightBlue";
        }, 1100);
        break;
      case "waitLeftBlue":
        cup2.className = "jumpingLeftBlue";
        cup2_game.className = "jumpingLeftBlue";
        setTimeout(() => {
          cup2.className = "waitLeftBlue";
          cup2_game.className = "waitLeftBlue";
        }, 1100);
        break;
    }
  } /* press s */ else if (e.keyCode == 83) {
    switch (cup1.className) {
      case "waitRightRed":
        cup1.className = "downRedRight";
        cup1_game.className = "downRedRight";
        setTimeout(() => {
          cup1.className = "waitRightRed";
          cup1_game.className = "waitRightRed";
        }, 1500);
        break;
      case "waitLeftRed":
        cup1.className = "downRedLeft";
        cup1_game.className = "downRedLeft";
        setTimeout(() => {
          cup1.className = "waitLeftRed";
          cup1_game.className = "waitLeftRed";
        }, 1500);
        break;
    }
    switch (cup2.className) {
      case "waitRightBlue":
        cup2.className = "downRightBlue";
        cup2_game.className = "downRightBlue";
        setTimeout(() => {
          cup2.className = "waitRightBlue";
          cup2_game.className = "waitRightBlue";
        }, 1500);
        break;
      case "waitLeftBlue":
        cup2.className = "downLeftBlue";
        cup2_game.className = "downLeftBlue";
        setTimeout(() => {
          cup2.className = "waitLeftBlue";
          cup2_game.className = "waitLeftBlue";
        }, 1500);
        break;
    }
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 68) {
    cup1.className = "waitRightRed";
    cup2.className = "waitRightBlue";
    cup1_game.className = "waitRightRed";
    cup2_game.className = "waitRightBlue";
  } else if (e.keyCode == 65) {
    cup1.className = "waitLeftRed";
    cup2.className = "waitLeftBlue";
    cup1_game.className = "waitLeftRed";
    cup2_game.className = "waitLeftBlue";
  }
});
