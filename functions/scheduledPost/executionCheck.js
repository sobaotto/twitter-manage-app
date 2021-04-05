const getJapanTime = require("../otherFunctions/getJapanTime");
const fetchProcessingsData = require("../mainFunctions/fetchProcessingsData");

const executionCheck = async (req) => {
  const JapanTime = getJapanTime();
  const processingsData = await fetchProcessingsData();

  const checkedProcessingsData = processingsData.map((data) => {
    // HTTPメソッドによる関数の呼び出しの場合は、テストでの呼び出しなので、trueの条件で実行有無を判断する(「req」の有無で判断)
    // スケジュールからの呼び出しの場合は、予約投稿なので、現在時刻も含めて実行有無を判断する
    const checkedResult = req
      ? data.switch === "ON"
      : data.switch === "ON" && data.startTime === JapanTime;

    data["execution"] = checkedResult;
    return data;
  });

  return checkedProcessingsData;
};

module.exports = executionCheck;
