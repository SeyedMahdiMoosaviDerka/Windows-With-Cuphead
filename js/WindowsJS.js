/* Show_Hide_RightClick */
function HideRightClick() {
  WindowsRightClick.className = "hide";
}
function ShowRightClick() {
  WindowsRightClick.className = "show";
}

WindowsRightClick.oncontextmenu = function (e) {
  return false;
}

wallpaper.oncontextmenu = function (e) {
  WindowsRightClick.style.left = e.pageX + "px";
  WindowsRightClick.style.top = e.pageY + "px";

  switch (WindowsRightClick.className) {
    case "hide":
      ShowRightClick();
      break;
    case "show":
      HideRightClick();
      setTimeout(() => {
        ShowRightClick();
      }, 100);
      break;
  }

  if (e.pageY > 250) {
    WindowsRightClick.style.top = e.pageY - 100 + "px";
  }

  if (e.pageY > 350) {
    WindowsRightClick.style.top = e.pageY - 200 + "px";
  }
  if (e.pageY > 450) {
    WindowsRightClick.style.top = e.pageY - 300 + "px";
  }

  if (e.pageY > 550) {
    WindowsRightClick.style.top = e.pageY - 400 + "px";
  }

  if (e.pageX > 1240) {
    WindowsRightClick.style.left = e.pageX - 250 + "px";
  }

  return false;
};
document.onclick = function () {
  HideRightClick();
};

/* ChengeBackgroundSize */

largeIcon.onclick = function () {
  cupheadIcon.className = "large";
};

mediumIcon.onclick = function () {
  cupheadIcon.className = "medium";
};

smallIcon.onclick = function () {
  cupheadIcon.className = "small";
};

/* NextBackgroun_RightClick */
next.onclick = function () {
  switch (wallpaper.className) {
    case "DarkWallpaper":
      wallpaper.className = "LightWallpaper";
      if ((wallpaper.className = "LightWallpaper")) {
        cupheadIcon.style.color = "black";

        backgroundHover.className = "";
      }
      break;
    case "LightWallpaper":
      wallpaper.className = "DarkWallpaper";

      if ((wallpaper.className = "DarkWallpaper")) {
        cupheadIcon.style.color = "white";

        backgroundHover.className = "backgroundHover";
      }
      break;
  }
};

/* cupheadTextcolor=> */

/* toolbar */

/* Window_iconClick */
function hide() {
  menu.className = "HideWindowsMenu";
}
function show() {
  menu.className = "ShowWindowsMenu";
}

if ((menu.className = "ShowWindowsMenu")) {
  windows_key.ondblclick = function () {
    switch (menu.className) {
      case "ShowWindowsMenu":
        hide();
        break;
    }
  };
}

if ((menu.className = "HideWindowsMenu")) {
  windows_key.onclick = function () {
    switch (menu.className) {
      case "HideWindowsMenu":
        show();
        break;
    }
  };
}

/*  not worked! */
/* if ((menu.className = "hide")) {
        show();
      } else {
        hide();
      } */
/* wallpaper.onclick = function () {
  hide();
};
cupheadIcon.onclick = function () {
  hide();
}; */

wallpaper.onclick = function () {
  if ((menu.className = "ShowWindowsMenu")) {
    hide();
  }
};
