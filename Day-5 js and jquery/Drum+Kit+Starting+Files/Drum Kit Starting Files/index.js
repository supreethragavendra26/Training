const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");

w.addEventListener("click", (e) => {
  const track = new Audio("./sounds/tom-1.mp3");
  // Add the border
  track.play();
});

a.addEventListener("click", (e) => {
  const track = new Audio("./sounds/tom-2.mp3");
  // Add the border
  track.play();
});

s.addEventListener("click", (e) => {
  const track = new Audio("./sounds/tom-3.mp3");
  // Add the border
  track.play();
});

d.addEventListener("click", (e) => {
  const track = new Audio("./sounds/tom-4.mp3");
  // Add the border
  track.play();
});

j.addEventListener("click", (e) => {
  const track = new Audio("./sounds/snare.mp3");
  // Add the border
  track.play();
});

k.addEventListener("click", (e) => {
  const track = new Audio("./sounds/kick-bass.mp3");
  // Add the border
  track.play();
});

l.addEventListener("click", (e) => {
  const track = new Audio("./sounds/crash.mp3");
  // Add the border
  track.play();
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "w") {
    const track = new Audio("./sounds/tom-1.mp3");

    track.play();
  }
  if (e.key.toLowerCase() === "a") {
    const track = new Audio("./sounds/tom-2.mp3");

    track.play();
  }
  if (e.key.toLowerCase() === "s") {
    const track = new Audio("./sounds/tom-3.mp3");

    track.play();
  }
  if (e.key.toLowerCase() === "d") {
    const track = new Audio("./sounds/tom-4.mp3");

    track.play();
  }
  if (e.key.toLowerCase() === "j") {
    const track = new Audio("./sounds/snare.mp3");

    track.play();
  }

  if (e.key.toLowerCase() === "k") {
    const track = new Audio("./sounds/kick-bass.mp3");

    track.play();
  }

  if (e.key.toLowerCase() === "l") {
    const track = new Audio("./sounds/crash.mp3");

    track.play();
  }
});
