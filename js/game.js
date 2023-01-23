const WIDTH = 400,
  HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH),
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distancia");
let $win = document.getElementById("win");
let $reset = document.getElementById("reset");
let bol = true;
let click = 0;

$map.addEventListener("click", (e) => {
  if (bol) {
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    click++;
    $distance.innerHTML = `${distanceHint}`;

    if (distance < 30) {
      $map.style.backgroundImage =
        "url('../img/tesoro.png'), url('../img/mapa.png')";
      $map.style.backgroundSize = "100px 82px, auto";
      $map.style.backgroundRepeat = "no-repeat, no-repeat";
      $map.style.backgroundPosition = ` ${target.x - 50}px ${
        target.y - 41
      }px, center`;
      $distance.innerHTML = `Has encontrado el tesoro, intentos ${click}`;
      bol = false;
      setTimeout(() => {
        $win.removeAttribute("hidden");
      }, 3000);
    }
  }
});

$reset.addEventListener("click", () => {
  target.x = getRandomNumber(WIDTH);
  target.y = getRandomNumber(HEIGH);
  bol = true;
  click = 0;

  $map.style.backgroundImage =
    "url('../img/mapa.png')";
  $map.style.backgroundSize = "auto";
  $map.style.backgroundRepeat = "no-repeat";
  $map.style.backgroundPosition = `center`;


  $win.setAttribute("hidden", "");
});
