function hide_reload(x) {
  x.style.display = "none";
  x.load();
  x.pause();
}

function show_play(x) {
  x.style.display = "block";
  x.play();
  LoopVideo = setInterval(() => {
    x.pause();
    x.play();
  }, 1);
}

function AllHide() {
  clearInterval(LoopVideo);
  clearInterval(Timeout_book);
  hide_reload(open_book);
  hide_reload(game_new_save_audio);
  hide_reload(film1);
  hide_reload(film1_action);
  hide_reload(film2);
  hide_reload(film2_action);
  hide_reload(film3);
  hide_reload(film3_action);
  hide_reload(film4);
  hide_reload(film4_action);
  hide_reload(film5);
  hide_reload(film5_action);
  hide_reload(film6);
  hide_reload(film6_action);
  hide_reload(film7);
  hide_reload(film7_action);
  hide_reload(film8);
  hide_reload(film8_action);
  hide_reload(film9);
  hide_reload(film9_action);
  hide_reload(film10);
  hide_reload(fil10_action);
  hide_reload(film11);
  hide_reload(fil11_action);
}

function On_Save_Click() {
  SetExitGame();
  game_new_save.className = "show";
  game_new_save_audio.play();
  show_play(open_book);
  Timeout_book = setTimeout(() => {
    show_play(film1);
    hide_reload(open_book);
  }, 6000);
}

save_1.onclick = function () {
  On_Save_Click();
};
save_2.onclick = function () {
  On_Save_Click();
};
save_3.onclick = function () {
  On_Save_Click();
};

film1.onclick = function () {
  show_play(film1_action);
  hide_reload(film1);

  time1 = setTimeout(() => {
    hide_reload(film1_action);
    show_play(film2);
  }, 800);
};

film2.onclick = function () {
  show_play(film2_action);
  hide_reload(film2);

  time2 = setTimeout(() => {
    hide_reload(film2_action);
    show_play(film3);
  }, 800);
};

film3.onclick = function () {
  show_play(film3_action);
  hide_reload(film3);

  time3 = setTimeout(() => {
    hide_reload(film3_action);
    show_play(film4);
  }, 800);
};

film4.onclick = function () {
  show_play(film4_action);
  hide_reload(film4);

  time4 = setTimeout(() => {
    hide_reload(film4_action);
    show_play(film5);
  }, 800);
};

film5.onclick = function () {
  show_play(film5_action);
  hide_reload(film5);

  time5 = setTimeout(() => {
    hide_reload(film5_action);
    show_play(film6);
  }, 800);
};

film6.onclick = function () {
  show_play(film6_action);
  hide_reload(film6);

  game_new_save_HaHa.play();

  time6 = setTimeout(() => {
    hide_reload(film6_action);
    show_play(film7);
  }, 800);
};

film7.onclick = function () {
  show_play(film7_action);
  hide_reload(film7);

  time7 = setTimeout(() => {
    hide_reload(film7_action);
    show_play(film8);
  }, 800);
};

film8.onclick = function () {
  show_play(film8_action);
  hide_reload(film8);

  time8 = setTimeout(() => {
    hide_reload(film8_action);
    show_play(film9);
  }, 800);
};

film9.onclick = function () {
  show_play(film9_action);
  hide_reload(film9);

  time9 = setTimeout(() => {
    hide_reload(film9_action);
    show_play(film10);
  }, 800);
};

film10.onclick = function () {
  show_play(film10_action);
  hide_reload(film10);

  time10 = setTimeout(() => {
    hide_reload(film10_action);
    show_play(film11);
  }, 800);
};

function show_totu() {
  totu.className = "show_totu";
}

function loading_more_functions() {
  // show_play(loading_more);

  setTimeout(() => {
    show_totu();
    SelectCharacter.className = "showSelector";
    selectorPlayer.className = "show";
  }, 1000);
  setTimeout(() => {
    hide_reload(loading_more);
    Exit_1.style.display = "none";
    game_new_save.className = "hide";
    /* selectorPlayer.className = "show"; */
    AllHide();
  }, 1000);
}

film11.onclick = function () {
  show_play(film11_action);
  hide_reload(film11);
  Skip.style.display = "none";

  setTimeout(() => {
    hide_reload(film11_action);
    hide_reload(game_new_save_audio);
    loading_more_functions();
  }, 800);
};

Skip.onclick = function () {
  Skip.style.display = "none";
  loading_more_functions();
  AllHide();
};

Exit_1.onclick = function () {
  /*  hide_reload(loading_more);
  Skip.style.display = "none";
  Exit_1.style.display = "none";
  game_new_save.className = "hide";
  clearInterval(LoopVideo); */
  location.reload();
  /* AllHide(); */
};
