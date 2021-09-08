let COUNT_NUMBER = 30;

export default function CountTime(elementTime, TIME_COUNT) {
  const intervalID = setInterval(() => {
    elementTime.innerHTML = COUNT_NUMBER;
    if (COUNT_NUMBER > 0) {
      COUNT_NUMBER--;
    } else {
      clearInterval(intervalID);
      COUNT_NUMBER = 30;
    }

    console.log(COUNT_NUMBER);
  }, TIME_COUNT);
}
