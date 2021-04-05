const getJapanTime = () => {
  const date = new Date(
    Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
  );

  const JapanTime =
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  return JapanTime;
};

module.exports = getJapanTime;
