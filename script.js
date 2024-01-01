// https://itaycode.com/
// credit to Kyle Wetton
var background = ["#24243e", "#302b63"];
const body = document.getElementsByTagName("body")[0];
const bass = document.getElementById("js-bass");
const col1 = document.getElementById("input-color-1");
const col2 = document.getElementById("input-color-2");
const col3 = document.getElementById("input-color-3");

function updatebass(picker, string) {
  if (!string) {
    bass.style.fill = picker.toHEXString();
  } else {
    // Used when generating random
    bass.style.fill = string;

    setTimeout(
      function () {
        bass.classList.remove("fade");
      },

      700
    );
  }
}

function updateBackgroundD(picker, randArray) {
  if (!randArray) {
    background[0] = picker.toHEXString();
  } else {
    background[0] = randArray[0];
  }

  body.style.background =
    "linear-gradient(to right, " +
    background[0] +
    " , " +
    background[1] +
    " , " +
    background[0] +
    ")";
}

function updateBackgroundL(picker, randArray) {
  if (!randArray) {
    background[1] = picker.toHEXString();
  } else {
    background[1] = randArray[1];
  }

  body.style.background =
    "linear-gradient(to right, " +
    background[0] +
    " , " +
    background[1] +
    " , " +
    background[0] +
    ")";
}

// Generate random

function generateRandom() {
  // bass
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  // Grad 1
  var grad_1_r = Math.floor(Math.random() * 256);
  var grad_1_g = Math.floor(Math.random() * 256);
  var grad_1_b = Math.floor(Math.random() * 256);
  // Grad 2
  var grad_2_r = grad_1_r >= 206 ? grad_1_r : grad_1_r + 50;
  var grad_2_g = grad_1_g >= 206 ? grad_1_g : grad_1_g + 50;
  var grad_2_b = grad_1_b >= 206 ? grad_1_b : grad_1_b + 50;

  let hex = rgbToHex(red, green, blue);
  let grad_1_hex = rgbToHex(grad_1_r, grad_1_g, grad_1_b);
  let grad_2_hex = rgbToHex(grad_2_r, grad_2_g, grad_2_b);

  let gradient = [grad_1_hex, grad_2_hex];

  updatebass(null, hex);
  updateBackgroundD(null, gradient);
  updateBackgroundL(null, gradient);

  bass.classList.add("fade");

  document.getElementById("input-color-1").jscolor.fromString(hex);

  document.getElementById("input-color-2").jscolor.fromString(grad_1_hex);

  document.getElementById("input-color-3").jscolor.fromString(grad_2_hex);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}