const getJapanTime = () => {
  const HOUR = 60;
  const japanTimeDifference = 9;

  const date = new Date(
    Date.now() +
      (new Date().getTimezoneOffset() + japanTimeDifference * HOUR) *
        HOUR *
        1000
  );

  const JapanTime =
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  return JapanTime;
};

module.exports = getJapanTime;
