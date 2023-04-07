const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');
const loopBtn = document.getElementById('loopBtn');

playBtn.addEventListener('click', () => {
  video.play();
});

pauseBtn.addEventListener('click', () => {
  video.pause();
});

stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value;
});

loopBtn.addEventListener('click', () => {
  if (video.loop) {
    video.loop = false;
    loopBtn.innerHTML = 'Loop';
  } else {
    video.loop = true;
    loopBtn.innerHTML = 'Unloop';
  }
});
