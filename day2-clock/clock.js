const refs = {
  hour: document.querySelector(".hour-hand"),
  minute: document.querySelector(".minute-hand"),
  second: document.querySelector(".second-hand"),
  audio: document.querySelector(".audio"),
  button: document.querySelector(".soundOnOff"),
  intervalId: null,
};

setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondsDegrees = (seconds / 60) * 360 - 90;
  const minutesDegrees = (minutes / 60) * 360 - 90;
  const hoursDegrees = (hours / 12) * 360 - 90 + Math.floor(minutes / 10) * 5.9;

  refs.hour.style["transform"] = `rotate(${hoursDegrees}deg)`;
  refs.minute.style["transform"] = `rotate(${minutesDegrees}deg)`;
  refs.second.style["transform"] = `rotate(${secondsDegrees}deg)`;
}, 1000);

refs.button.addEventListener("click", toggleSound);

function toggleSound() {
  refs.button.classList.toggle("on");

  if ([...refs.button.classList].includes("on")) {
    refs.intervalId = setInterval(() => {
      refs.audio.currentTime = 0;
      refs.audio.play();
    }, 1000);
  } else {
    clearInterval(refs.intervalId);
    refs.audio.pause();
    refs.audio.currentTime = 0;
  }
}
