window.addEventListener("keydown", handlePress);

document.querySelectorAll(".key-item").forEach((key) => {
  key.addEventListener("transitionend", removeClass);
});

function handlePress(evt) {
  const audio = document.querySelector(`audio[data-key='${evt.keyCode}'`);
  const key = document.querySelector(`.key-item[data-key='${evt.keyCode}'`);

  key.classList.add("active");
  audio.currentTime = 0;
  audio.play();
}

function removeClass(evt) {
  this.classList.remove("active");
}
