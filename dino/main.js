var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = window.innerHeight - 200;

var dino = {
  x: 10,
  y: 650,
  width: 100,
  height: 100,
  draw() {
    // draw : function() 과 같다 // 메서드 단축 구문임
    ctx.fillStyle = "rgb(200, 0, 0, 0)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(dinoImg, this.x, this.y);
  },
};

var dinoImg = new Image();
dinoImg.src = "dino1.png";

var cactusImg = new Image();
cactusImg.src = "cactus.png";

var sunImg = new Image();
sunImg.src = "sun.png";

var sun = {
  x: 925,
  y: 425,
  width: 100,
  height: 100,
  draw() {
    ctx.drawImage(sunImg, this.x, this.y);
  },
};

class Cactus {
  constructor() {
    this.x = 800;
    this.y = 650;
    this.width = 100;
    this.height = 100;
  }
  draw() {
    // ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(cactusImg, this.x, this.y);
  }
}

var timer = 0;
var jumpTimer = 0;
var cactusArrays = [];
var animation;
var timerText = document.getElementById("timer");

function MovingCharacter() {
  animation = requestAnimationFrame(MovingCharacter); // 1초에 60번 실행
  timer++;
  //   timerText.innerHTML = "점수 : " + timer;

  ctx.clearRect(0, 0, canvas.width, canvas.height); // canvas clear

  if (timer % 160 === 0) {
    var cactus = new Cactus();
    cactusArrays.push(cactus);
  }

  cactusArrays.forEach((cactus, i, o) => {
    if (cactus.x < 0) {
      //   cactusArrays.shift();
      o.splice(i, 1);
    }
    cactus.x -= 5;

    CrashCheck(dino, cactus);

    cactus.draw();
  });

  if (jumping == true) {
    dino.y -= 5;
    jumpTimer++;
  }

  if (jumping == false) {
    if (dino.y < 650) {
      dino.y += 5;
    }
  }

  if (jumpTimer > 45) {
    jumping = false;
    jumpTimer = 0;
  }

  dino.draw();
  sun.draw();
  ctx.font = "26px serif";
  ctx.fillText("Hello", 100, 500);
}

MovingCharacter();

// 충돌확인
function CrashCheck(dino, cactus) {
  var xx = cactus.x - (dino.x + dino.width);
  var yy = cactus.y - (dino.y + dino.height);

  if (xx < 0 && yy < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cancelAnimationFrame(animation);
    // GameOver();
    // ctx.beginPath();
  }
}

var jumping = false;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jumping = true;
  }
});

function GameOver() {
  if (!confirm("GameOver!! 다시하시겠습니까?")) {
    alert("GameOver!!!");
  } else {
    alert("ReStart!");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}
