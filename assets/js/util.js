const DATA_STORAGE_KEY = "GAME_MILLIONAIRE";

const config = JSON.parse(localStorage.getItem(DATA_STORAGE_KEY)) || {};

export default function setConfig(key, value) {
  config[key] = value;
  localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(config));
}
