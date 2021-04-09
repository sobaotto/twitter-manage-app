const getJapanTime = require("./getJapanTime");

const executionTimeJudge = (startTimeString) => {
  // 登録されていた処理開始時間を計算できる形にする
  const minuteStringStartTime = startTimeString.slice(-2);
  const hourStringStartTime = startTimeString.slice(0, 2);

  const minuteStartTime = Number(minuteStringStartTime);
  const hourStartTime = Number(hourStringStartTime);

  const fourMinutesLaterStartTime = new Date(
    2021,
    4,
    1,
    hourStartTime,
    minuteStartTime + 4
  );
  const startTime = new Date(2021, 4, 1, hourStartTime, minuteStartTime);

  // 日本時間を計算できる形にする
  const japanTimeString = getJapanTime();

  const minuteStringJapanTime = japanTimeString.slice(-2);
  const hourStringJapanTime = japanTimeString.slice(0, 2);

  const minuteJapanTime = Number(minuteStringJapanTime);
  const hourJapanTime = Number(hourStringJapanTime);

  const japanTime = new Date(2021, 4, 1, hourJapanTime, minuteJapanTime);

  // 登録されていた時間と日本時間を比較して処理の実行を判定する
  if (startTime <= japanTime && japanTime < fourMinutesLaterStartTime) {
    console.log("処理実行");
    return true;
  } else {
    console.log("処理対象外");
    return false;
  }
};

module.exports = executionTimeJudge;
