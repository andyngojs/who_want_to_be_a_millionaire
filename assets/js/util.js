const DATA_STORAGE_KEY = "GAME_MILLIONAIRE";

const config = JSON.parse(localStorage.getItem(DATA_STORAGE_KEY)) || {};

const setConfig = (key, value) => {
  config[key] = value;
  localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(config));
};
