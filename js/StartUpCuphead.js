/* StartUp */
anybottompress = 0;

document.addEventListener("keydown", () => {
  if (anybottompress == 1) {
    if (anybottompress == 1) {
      pressanybottomaction();
    }
    anybottompress = 2;
    //console.log(anybottompress);
  }
});

cupheadIcon.ondblclick = function () {
  vido_audioStart();
};

function vido_audioStart() {
  game.className = "show";
  StratVideo.style.display = "block";
  StratVideo.play();

  setTimeout(() => {
    anybottompress = 1;
    StratVideo.style.display = "none";
    PressBottomVideo.play();
    StartMenuAudio.play();
    Exit_2.className = "show";
    AudioAndVideoLoop_Start = setInterval(() => {
      StartMenuAudio.pause();
      StartMenuAudio.play();
      PressBottomVideo.pause();
      PressBottomVideo.play();
    }, 1);
  }, 5800);
}

function pressanybottomaction() {
  PressBottomVideo.style.display = "none";
  PressBottomAction.play();
  PressBottomActionAudio.play();

  setTimeout(() => {
    MenuBackground.style.display = "block";
    MenuBackground.play();
    PressBottomAction.style.display = "none";
    /* cover_1.style.display = "block"; */
    cover_menu.style.display = "flex";
    setInterval(() => {
      MenuBackground.pause();
      MenuBackground.play();
    }, 1);
  }, 1500);
}

PressBottomVideo.onclick = function () {
  PressBottomVideo.style.display = "none";
  PressBottomAction.play();
  PressBottomActionAudio.play();

  setTimeout(() => {
    MenuBackground.style.display = "block";
    MenuBackground.play();
    PressBottomAction.style.display = "none";
    /* cover_1.style.display = "block"; */
    cover_menu.style.display = "flex";
    setInterval(() => {
      MenuBackground.pause();
      MenuBackground.play();
    }, 1);
  }, 1500);
};

/* ExitBottom */

/* ExitGame.onclick = function () {
  location.reload();
}; */

/* Start */

/* StartBottom.onmouseover = function () {
  StartBottom.style.background =
    " url(../CupHeadApp/cuphead_img/menu/SelectedStart.png) no-repeat";
  StartBottom.style.backgroundSize = "100% 100%";
};

StartBottom.onmouseout = function () {
  StartBottom.style.background =
    " url(../CupHeadApp/cuphead_img/menu/DiselectedStart.png) no-repeat";
  StartBottom.style.backgroundSize = "100% 100%";
}; */

var PositionOfGameMenu = 0;

StartBottom.onclick = function () {
  StartBottomClicked.style.display = "flex";
  PositionOfGameMenu = PositionOfGameMenu + 1;
  BackGame();
};

BackInGame.onclick = function () {
  PositionOfGameMenu = PositionOfGameMenu - 1;
  BackGame();
};
function BackGame() {
  switch (PositionOfGameMenu) {
    case 0:
      BackInGame.className = "hide";
      StartBottomClicked.style.display = "none";
      OptionsBottomClicked.style.display = "none";
      AudioBottomClicked.style.display = "none";
      VisualBottomClicked.style.display = "none";
      SorryAlert.style.display = "none";
      break;
    case 1:
      BackInGame.className = "showComeBack";
      AudioBottomClicked.style.display = "none";
      VisualBottomClicked.style.display = "none";
      SorryAlert.style.display = "none";
      break;
    case 2:
      SorryAlert.style.display = "block";
      break;
  }
}

save_1.onmouseover = function () {
  StartBottomClicked.style.background =
    "url(../CupHeadApp/cuphead_img/Menu_Start/New_1.png) no-repeat";
  StartBottomClicked.style.backgroundSize = "100% 100%";
};
/* save_1.onclick = function () {
  PressBottomActionAudio.play();
  SetExitGame();
}; */

save_2.onmouseover = function () {
  StartBottomClicked.style.background =
    "url(../CupHeadApp/cuphead_img/Menu_Start/New_2.png) no-repeat";
  StartBottomClicked.style.backgroundSize = "100% 100%";
};
/* save_2.onclick = function () {
  PressBottomActionAudio.play();
  SetExitGame();
}; */

save_3.onmouseover = function () {
  StartBottomClicked.style.background =
    "url(../CupHeadApp/cuphead_img/Menu_Start/New_3.png) no-repeat";
  StartBottomClicked.style.backgroundSize = "100% 100%";
};
/* save_3.onclick = function () {
  PressBottomActionAudio.play();
  SetExitGame();
}; */

/* Options */
/* OptionsBottom.onmouseover = function () {
  OptionsBottom.style.background =
    " url(../CupHeadApp/cuphead_img/menu/SelectedOptions.png) no-repeat";
  OptionsBottom.style.backgroundSize = "100% 100%";
};
OptionsBottom.onmouseout = function () {
  OptionsBottom.style.background =
    " url(../CupHeadApp/cuphead_img/menu/DiselectedOptions.png) no-repeat";
  OptionsBottom.style.backgroundSize = "100% 100%";
}; */
/* pos0 */

OptionsBottom.onclick = function () {
  OptionsBottomClicked.style.display = "block";
  PositionOfGameMenu = PositionOfGameMenu + 1;
  BackGame();
};
/* pos1 */

AudioBottom.onclick = function () {
  AudioBottomClicked.style.display = "block";
  PositionOfGameMenu = PositionOfGameMenu + 1;
  BackGame();
};

VisualBottom.onclick = function () {
  VisualBottomClicked.style.display = "block";
  PositionOfGameMenu = PositionOfGameMenu + 1;
  BackGame();
};
/* pos2 */

/* Exit */
/* ExitBottom.onmouseover = function () {
  ExitBottom.style.background =
    " url(../CupHeadApp/cuphead_img/menu/SelectedExit.png) no-repeat";
  ExitBottom.style.backgroundSize = "100% 100%";
};
ExitBottom.onmouseout = function () {
  ExitBottom.style.background =
    " url(../CupHeadApp/cuphead_img/menu/DiselectedExit.png) no-repeat";
  ExitBottom.style.backgroundSize = "100% 100%";
}; */
ExitBottom.onclick = function () {
  location.reload();
};

function SetExitGame() {
  game.className = "hide";
  Exit_1.className = "hide";
  BackInGame.className = "hide";
  cover_menu.style.display = "none";
  MenuBackground.style.display = "none";
  PressBottomVideo.style.display = "block";
  PressBottomAction.style.display = "block";
  StratVideo.load();
  StratVideo.pause();
  StartMenuAudio.load();
  StartMenuAudio.pause();
  clearInterval(AudioAndVideoLoop_Start);
  PositionOfGameMenu = 0;
  BackGame();
  /*   console.log(PositionOfGameMenu); */
}
