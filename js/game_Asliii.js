var cup1_gamePosition = 370;
cup1_game.style.left = cup1_gamePosition + "px";
var cup2_gamePosition = 370;
cup2_game.style.left = cup2_gamePosition + "px";

yourScore = 0;
score.innerHTML = "SCORE : " + yourScore;

/* show_play(game_new_save_audio); */

/* Game Done! */

function GameIsDone() {
  if (cup2Position >= 1300) {
    /* totu.className = "hide_totu"; */
    tutorialDone.className = "showSelector";
    LetsGoTutorial.onclick = function () {
      show_play(game_new_save_audio);
      tutorialDone.className = "hideSelector";
      tutorialDone.className = "hideSelector";
      SelectCharacter.className = "hideSelector";
      totu.className = "hide_totu";

      GameAsliii.className = "show_totu";

      cup1_gamePosition = 370;
      cup1_game.style.left = cup1_gamePosition + "px";
      cup2_gamePosition = 370;
      cup2_game.style.left = cup2_gamePosition + "px";
      var cup1Position = 370;
      cup1.style.left = cup1Position + "px";
      var cup2Position = 370;
      cup2.style.left = cup2Position + "px";

      cup1_game.style.top = "360px";
      cup2_game.style.top = "360px";
    };
  }
}

function GameMapIsDone() {
  if (cup2_gamePosition == 1270) {
    Enter_game.className = "showEnter";

    if ((Enter_game.className = "showEnter")) {
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
          /* alert("you pressed enter"); */

          nowgo.play();

          setTimeout(() => {
            enemyWalking(0);
          }, 2000);

          let T = setInterval(() => {
            nowgo.load();
            nowgo.play();
          }, 6000);
          setTimeout(() => {
            clearInterval(T);
          }, 12100);

          game_new_save_HaHa.play();

          Enter_game.style.display = "none";
          GameAsliii.style.background =
            "url(CupHeadApp/cuphead_img/OrginalGame/gameBack_okay.png) no-repeat";
          GameAsliii.style.backgroundSize = "100% 100%";
          cup1_game.style.top = "440px";
          cup2_game.style.top = "440px";

          cup1_gamePosition = 100;
          cup1_game.style.left = cup1_gamePosition + "px";
          cup2_gamePosition = 100;
          cup2_game.style.left = cup2_gamePosition + "px";

          GameMapDone = true;

          setTimeout(() => {
            nowgo.style.display = "none";
          }, 5000);
        }
      });
    }
  } else {
    Enter_game.className = "hideEnter";
  }
}

/* functions game asliii */

GameMapDone = false;

direction = "right";

function go_right_asli(x) {
  switch (GameMapDone) {
    case false:
      if (cup1_gamePosition < 1270) {
        cup1_gamePosition = cup1_gamePosition + x;
        cup1_game.style.left = cup1_gamePosition + "px";
        cup2_gamePosition = cup2_gamePosition + x;
        cup2_game.style.left = cup2_gamePosition + "px";

        GameMapIsDone();

        /* console.log(cup1_gamePosition); */
        //console.log(GameMapDone);
      }
      break;
    case true:
      if (cup1_gamePosition < 1370) {
        cup1_gamePosition = cup1_gamePosition + x;
        cup1_game.style.left = cup1_gamePosition + "px";
        cup2_gamePosition = cup2_gamePosition + x;
        cup2_game.style.left = cup2_gamePosition + "px";

        GameMapIsDone();

        /* console.log(cup1_gamePosition); */
        //console.log(GameMapDone);
      }
      break;
  }

  direction = "right";
}

function go_left_asli(x) {
  switch (GameMapDone) {
    case false:
      if (cup1_gamePosition > 300) {
        cup1_gamePosition = cup1_gamePosition - x;
        cup1_game.style.left = cup1_gamePosition + "px";
        cup2_gamePosition = cup2_gamePosition - x;
        cup2_game.style.left = cup2_gamePosition + "px";

        GameMapIsDone();

        //console.log(cup1_gamePosition);
      }
      break;
    case true:
      if (cup1_gamePosition > 0) {
        cup1_gamePosition = cup1_gamePosition - x;
        cup1_game.style.left = cup1_gamePosition + "px";
        cup2_gamePosition = cup2_gamePosition - x;
        cup2_game.style.left = cup2_gamePosition + "px";

        GameMapIsDone();

        //console.log(cup1_gamePosition);
      }
      break;
  }

  direction = "left";
}

//shooting :

Bullet = document.querySelectorAll("#GameAsliii > .Bullet");
BulletPosition = 3000;
Bullet[0].style.left = BulletPosition + "px";

document.addEventListener("keydown", function (el) {
  if (el.keyCode == 74) {
    BulletPosition = cup1_gamePosition;
    Bullet[0].style.left = BulletPosition + 70 + "px";
    switch (direction) {
      case "right":
        let shootingright = setInterval(() => {
          BulletPosition = BulletPosition + 10;
          Bullet[0].style.left = BulletPosition + "px";

          if (BulletPosition > 1470) {
            BulletPosition = 3000;
            Bullet[0].style.left = BulletPosition + "px";
            clearInterval(shootingright);
          }
        }, 10);
        break;
      case "left":
        let shootingleft = setInterval(() => {
          BulletPosition = BulletPosition - 10;
          Bullet[0].style.left = BulletPosition + "px";

          if (BulletPosition < -100 || BulletPosition > 1470) {
            BulletPosition = 3000;
            Bullet[0].style.left = BulletPosition + "px";
            clearInterval(shootingleft);
          }
        }, 10);
        break;
    }
  }
});

/* Flower Enemy */

characterHealth = 3;

function Boom() {
  GameAsliii.style.animation = "BoomShaking 0.01s reverse infinite";
  setTimeout(() => {
    GameAsliii.style.animation = "";
  }, 500);

  function BoomRight() {
    cup1_game.className = "Boom";
    cup2_game.className = "Boom";

    setTimeout(() => {
      cup1_game.className = "waitRightRed";
      cup2_game.className = "waitRightBlue";
    }, 500);
  }
  function BoomLeft() {
    cup1_game.className = "Boom";
    cup2_game.className = "Boom";

    setTimeout(() => {
      cup1_game.className = "waitLeftRed";
      cup2_game.className = "waitLeftBlue";
    }, 500);
  }
  switch (cup1_game.className) {
    case "walkingRightRed":
      BoomRight();
      break;
    case "waitRightRed":
      BoomRight();
      break;
    case "downRedRight":
      BoomRight();
      break;
    case "dashRightRed":
      BoomRight();
      break;
    case "walkingLeftRed":
      BoomRight();
      break;
    case "waitLeftRed":
      BoomLeft();
      break;
    case "downRedLeft":
      BoomLeft();
      break;
    case "dashLeftRed":
      BoomLeft();
      break;
  }

  PressBottomActionAudio.play();
  BoomSound.play();

  HP.style.animation = "HP_changer 1.5s linear";
  setTimeout(() => {
    HP.style.animation = "Enter_game 1s linear infinite";
  }, 1500);

  if (characterHealth == 3) {
    HP.style.background =
      "url(CupHeadApp/cuphead_img/OrginalGame/HP2.png) no-repeat";
    characterHealth = 2;
  } else if (characterHealth == 2) {
    HP.style.background =
      "url(CupHeadApp/cuphead_img/OrginalGame/HP1.png) no-repeat";
    characterHealth = 1;
  } else if (characterHealth == 1) {
    //alert("You'r lose !");
    /* location.reload(); */
    Losing();
  }
}

function Losing() {
  alert("You'r lose !");
}

numberEnemy = 0;

function enemyWalking(enemyNumber) {
  // Returns a random integer from 0 to 1370:
  //let EnemyFlowerPosition = Math.floor(Math.random() * 1370);
  let EnemyFlowerPosition = Math.floor(Math.random() * 1700) + 1370;

  //create element
  enemyElements = document.createElement("div");
  enemyElements.className = "FlowerEnemy";

  GameAsliii.appendChild(enemyElements);

  //get element:
  FlowerEnemy = document.querySelectorAll("#GameAsliii > .FlowerEnemy");
  FlowerEnemy[enemyNumber].style.left = EnemyFlowerPosition + "px";

  function shootingPosition() {
    if (
      EnemyFlowerPosition < BulletPosition + 25 &&
      EnemyFlowerPosition > BulletPosition - 25
    ) {
      BulletPosition = 3000;
      Bullet[0].style.left = BulletPosition + "px";

      FlowerEnemy[enemyNumber].style.transition = "1s";
      FlowerEnemy[enemyNumber].style.rotate = "720deg";
      FlowerEnemy[enemyNumber].style.opacity = "0";
      FlowerEnemy[enemyNumber].style.scale = "0";

      enemyCoin = document.createElement("div");
      enemyCoin.className = "enemyCoin";
      GameAsliii.appendChild(enemyCoin);

      FlowerEnemyCoin = document.querySelectorAll("#GameAsliii > .enemyCoin");

      FlowerEnemyCoinPosition = EnemyFlowerPosition;
      FlowerEnemyCoin[enemyNumber].style.left = EnemyFlowerPosition;

      setTimeout(() => {
        FlowerEnemyCoin[enemyNumber].style.top = "-1000px";

        yourScore = yourScore + 1;
        score.innerHTML = "SCORE : " + yourScore;
      }, 5000);

      clearInterval(shootingright);
      clearInterval(shootingleft);
    }
  }

  function enemy_left() {
    // for limit the enemeis movement:
    if (EnemyFlowerPosition > 0) {
      let enemywalkingleft = setInterval(() => {
        FlowerEnemy[enemyNumber].style.animation =
          "enemyLeft 1s linear infinite";

        EnemyFlowerPosition = EnemyFlowerPosition - 5;
        FlowerEnemy[enemyNumber].style.left = EnemyFlowerPosition + "px";
        //console.log(EnemyFlowerPosition);

        if (EnemyFlowerPosition < 0) {
          clearInterval(enemywalkingleft);
          enemy_right();
        }

        // this if for calling BoomFunction from right to character:
        if (
          EnemyFlowerPosition < cup1_gamePosition + 50 &&
          EnemyFlowerPosition > cup1_gamePosition - 50
        ) {
          if (
            cup1_game.className == "jumpingRightRed" ||
            cup1_game.className == "dashRightRed"
          ) {
          } else {
            //this is for prevent Boom repetation:
            cup1_gamePosition = cup1_gamePosition + 100;
            cup1_game.style.left = cup1_gamePosition + "px";
            cup2_gamePosition = cup2_gamePosition + 100;
            cup2_game.style.left = cup2_gamePosition + "px";
            Boom();
          }
        }

        if (
          EnemyFlowerPosition < BulletPosition + 25 &&
          EnemyFlowerPosition > BulletPosition - 25
        ) {
          clearInterval(enemywalkingleft);
        }

        shootingPosition();

        return;
      }, 10);
    }
  }
  function enemy_right() {
    // for limit the enemeis movement:
    if (EnemyFlowerPosition < 1370) {
      let enemywalkingright = setInterval(() => {
        FlowerEnemy[enemyNumber].style.animation =
          "enemyRight 1s linear infinite";

        EnemyFlowerPosition = EnemyFlowerPosition + 5;
        FlowerEnemy[enemyNumber].style.left = EnemyFlowerPosition + "px";
        //console.log(EnemyFlowerPosition);

        if (EnemyFlowerPosition > 1370) {
          clearInterval(enemywalkingright);
          enemy_left();
        }

        // this if for calling BoomFunction from left to character:

        if (
          EnemyFlowerPosition < cup1_gamePosition + 50 &&
          EnemyFlowerPosition > cup1_gamePosition - 50
        ) {
          if (
            cup1_game.className == "jumpingLeftRed" ||
            cup1_game.className == "dashLeftRed"
          ) {
          } else {
            //this is for prevent Boom repetation:
            cup1_gamePosition = cup1_gamePosition - 100;
            cup1_game.style.left = cup1_gamePosition + "px";
            cup2_gamePosition = cup2_gamePosition - 100;
            cup2_game.style.left = cup2_gamePosition + "px";
            Boom();
          }
        }

        if (
          EnemyFlowerPosition < BulletPosition + 25 &&
          EnemyFlowerPosition > BulletPosition - 25
        ) {
          clearInterval(enemywalkingright);
        }

        shootingPosition();
        return;
      }, 10);
    }
  }

  //calling enemy to move to left:
  enemy_left();

  numberEnemy = numberEnemy + 1;
  setTimeout(() => {
    enemyWalking(numberEnemy);
  }, 3000);
}

// making enemy:

//enemyWalking(0);
