canvas = document.getElementById("khunggame");
can = canvas.getContext("2d");
txtScore = document.getElementById("score");
txtLevel = document.getElementById("level");

level = 1;
score = 3;
snake = {
  mangran: [],
  dauranx: 1,
  daurany: 1,
  dodairan: 2,
  dichchuyenx: 0,
  dichchuyeny: 0
};
imagethucan = new Image();
imagethucan.src = "images/tan.png";

thucan = {
  thucancuax: 1,
  thucancuay: 1
};
chuongngaivat = {
  x: 0,
  y: 0,
  width: 25,
  height: 25
};
mangNV = [];
map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
mapTwo = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
mapThree = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
mapFour = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

gameOver = false;
youWin = false;
kichcosnake = 25;
timechaySnake = 0;

nhacnen = new Audio();
nhacnen.src = "audio/nhacnen.mp3";
thucan = new Audio();
thucan.src = "audio/thucan.mp3";
dichuyen = new Audio();
dichuyen.src = "audio/dichuyen.mp3";
thua = new Audio();
thua.src = "audio/thua.mp3";
win = new Audio();
win.src = "audio/youwin.mp3";


function batdaugame() {
  if (gameOver == false)
    if (youWin == false)
      requestAnimationFrame(batdaugame);

  nhacnen.play();
  txtLevel.innerText = level;
  txtScore.innerText = score;

  if (++timechaySnake < 5) {
    return true;
  } else {
    timechaySnake = 0;
  }

  can.clearRect(0, 0, canvas.width, canvas.height);
  snake.dauranx += snake.dichchuyenx;
  snake.daurany += snake.dichchuyeny;

  if (snake.mangran.length > snake.dodairan) {
    snake.mangran.pop();
  }
  snake.mangran.unshift({ x: snake.dauranx, y: snake.daurany });

  can.drawImage(imagethucan, thucan.thucancuax, thucan.thucancuay);

  snake.mangran.forEach(function (arraySnake, index) {
    paintSnake();
    if (arraySnake.x == thucan.thucancuax && arraySnake.y == thucan.thucancuay) {
      snake.dodairan++;
      score++;
      thucan.play();
      thucan.thucancuax = Math.floor(Math.random() * 25) * kichcosnake;
      thucan.thucancuay = Math.floor(Math.random() * 25) * kichcosnake;
    }
    for (i = index + 1; i < snake.mangran.length; i++) {
      if (snake.dauranx < 0) {
        snake.dauranx = canvas.width - kichcosnake;
      }
      if (snake.daurany < 0) {
        snake.daurany = canvas.height - kichcosnake;
      }
      if (snake.dauranx > canvas.width) {
        snake.dauranx = 0;
      }
      if (snake.daurany > canvas.height) {
        snake.daurany = 0;
      }
      if (arraySnake.x == snake.mangran[i].x && arraySnake.y == snake.mangran[i].y) {
        reset();
      }
    }
  });
  if (level == 2) {
    for (i = 0; i < map[0].length; i++) {
      for (j = 0; j < map.length; j++) {
        if (map[i][j] != 0) {
          mangNV.push({ x: j * 25, y: i * 25, width: 25, height: 25, status: true });
        }
      }
    }
    mangNV.forEach((b) => {
      if (b.status) {
        if (snake.dauranx + kichcosnake >= b.x + 2 && snake.dauranx <= b.x + 25 - 2
          && snake.daurany <= b.y + 25 - 2 && snake.daurany + kichcosnake >= b.y + 2) {
          gameOver = true;
          can.font = "55px Algerian";
          can.fillStyle = "black";
          can.fillText("Game over^-^", 160, 275);
          thua.play();
        }
        if (thucan.thucancuax + kichcosnake >= b.x && thucan.thucancuax <= b.x
          && thucan.thucancuay <= b.y && thucan.thucancuay + kichcosnake >= b.y) {
          thucan.thucancuax = Math.floor(Math.random() * 25) * kichcosnake;
          thucan.thucancuay = Math.floor(Math.random() * 25) * kichcosnake;
        }
        can.fillStyle = "brown";
        can.fillRect(b.x, b.y, b.width - 1, b.height - 1);
      }
    });
  }
  if (level == 3) {
    for (i = 0; i < mapTwo[0].length; i++) {
      for (j = 0; j < mapTwo.length; j++) {
        if (mapTwo[i][j] != 0) {
          mangNV.push({ x: j * 25, y: i * 25, width: 25, height: 25, status: true });
        }
      }
    }
    mangNV.forEach((b) => {
      if (b.status) {
        if (snake.dauranx + kichcosnake >= b.x + 2 && snake.dauranx <= b.x + 25 - 2
          && snake.daurany <= b.y + 25 - 2 && snake.daurany + kichcosnake >= b.y + 2) {
          gameOver = true;
          can.font = "55px Algerian";
          can.fillStyle = "black";
          can.fillText("Game over^-^", 160, 275);
          thua.play();
        }
        if (thucan.thucancuax + kichcosnake >= b.x && thucan.thucancuax <= b.x
          && thucan.thucancuay <= b.y && thucan.thucancuay + kichcosnake >= b.y) {
          thucan.thucancuax = Math.floor(Math.random() * 25) * kichcosnake;
          thucan.thucancuay = Math.floor(Math.random() * 25) * kichcosnake;
        }
        can.fillStyle = "brown";
        can.fillRect(b.x, b.y, b.width - 1, b.height - 1);
      }
    });
  }
  if (level == 4) {
    for (i = 0; i < mapThree[0].length; i++) {
      for (j = 0; j < mapThree.length; j++) {
        if (mapThree[i][j] != 0) {
          mangNV.push({ x: j * 25, y: i * 25, width: 25, height: 25, status: true });
        }
      }
    }
    mangNV.forEach((b) => {
      if (b.status) {
        if (snake.dauranx + kichcosnake >= b.x + 2 && snake.dauranx <= b.x + 25 - 2
          && snake.daurany <= b.y + 25 - 2 && snake.daurany + kichcosnake >= b.y + 2) {
          gameOver = true;
          can.font = "55px Algerian";
          can.fillStyle = "black";
          can.fillText("Game over^-^", 160, 275);
          thua.play();
        }

        if (thucan.thucancuax + kichcosnake >= b.x && thucan.thucancuax <= b.x
          && thucan.thucancuay <= b.y && thucan.thucancuay + kichcosnake >= b.y) {
          thucan.thucancuax = Math.floor(Math.random() * 25) * kichcosnake;
          thucan.thucancuay = Math.floor(Math.random() * 25) * kichcosnake;
        }
        can.fillStyle = "brown";
        can.fillRect(b.x, b.y, b.width - 1, b.height - 1);
      }
    });
  }
  if (level == 5) {
    for (i = 0; i < mapFour[0].length; i++) {
      for (j = 0; j < mapFour.length; j++) {
        if (mapFour[i][j] != 0) {
          mangNV.push({ x: j * 25, y: i * 25, width: 25, height: 25, status: true });
        }
      }
    }
    mangNV.forEach((b) => {
      if (b.status) {
        if (snake.dauranx + kichcosnake >= b.x + 2 && snake.dauranx <= b.x + 25 - 2
          && snake.daurany <= b.y + 25 - 2 && snake.daurany + kichcosnake >= b.y + 2) {
          gameOver = true;
          can.font = "55px Algerian";
          can.fillStyle = "black";
          can.fillText("Game over^-^", 160, 275);
          thua.play();
        }
        if (score == 20) {
          youWin = true;
          can.font = "55px Algerian";
          can.fillStyle = "black";
          can.fillText("You Win^-^", 200, 275);
          win.play();
        }
        if (thucan.thucancuax + kichcosnake >= b.x && thucan.thucancuax <= b.x
          && thucan.thucancuay <= b.y && thucan.thucancuay + kichcosnake >= b.y) {
          thucan.thucancuax = Math.floor(Math.random() * 25) * kichcosnake;
          thucan.thucancuay = Math.floor(Math.random() * 25) * kichcosnake;
        }
        can.fillStyle = "brown";
        can.fillRect(b.x, b.y, b.width - 1, b.height - 1);
      }
    });
  }
  switch (level) {
    case 1:
      levelTwo(2);
      break;
    case 2:
      levelTwo(3);
      break;
    case 3:
      levelTwo(4);
      break;
    case 4:
      levelTwo(5);
      break;
  }

}
function paintSnake() {
  snake.mangran.forEach(function (arraySnake, index) {
    can.fillStyle = "white";
    can.fillRect(arraySnake.x, arraySnake.y, kichcosnake, kichcosnake);
    can.strokeStyle = "brown";
    can.strokeRect(arraySnake.x, arraySnake.y, kichcosnake, kichcosnake);
  });
}
function reset() {
  snake.mangran = [];
  snake.dauranx = kichcosnake;
  snake.daurany = kichcosnake;
  snake.dodairan = 2;
  snake.dichchuyenx = kichcosnake;
  snake.dichchuyeny = 0;
  thucan.thucancuax = Math.floor(Math.random() * 25) * kichcosnake;
  thucan.thucancuay = Math.floor(Math.random() * 25) * kichcosnake;
}

function levelTwo(levelNew) {
  if (txtScore.innerText == 20) {
    level = levelNew;
    score = 3;
    reset();
  }

}
document.addEventListener("keydown", function (xulidichuyen) {
  // dichuyen.play();
  if (xulidichuyen.keyCode == 37) {
    dichuyen.play();
    snake.dichchuyenx = -kichcosnake;
    snake.dichchuyeny = 0;
  }
  if (xulidichuyen.keyCode == 38) {
    dichuyen.play();
    snake.dichchuyenx = 0;
    snake.dichchuyeny = -kichcosnake;
  }
  if (xulidichuyen.keyCode == 39) {
    dichuyen.play();
    snake.dichchuyenx = kichcosnake;
    snake.dichchuyeny = 0;
  }
  if (xulidichuyen.keyCode == 40) {
    dichuyen.play();
    snake.dichchuyenx = 0;
    snake.dichchuyeny = kichcosnake;
  }
});
requestAnimationFrame(batdaugame);

