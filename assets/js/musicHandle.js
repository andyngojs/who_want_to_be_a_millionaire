export function beginMusic(music) {
  music.play();
  music.volume = 0.4;
}

export function loadedMusic(music) {
  music.load();
}

export function endMusic(music) {
  music.pause();
}
