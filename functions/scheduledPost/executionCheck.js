const executionCheck = async (req) => {
  const getJapanTime = require("../otherFunctions/getJapanTime");
  const fetchProcessingsData = require("../mainFunctions/fetchProcessingsData");

  const JapanTime = getJapanTime();
  const processingsData = await fetchProcessingsData();

  const executionCheckedProcessingsData = await processingsData.map((data) => {
    if (req) {
      data["execution"] = data.switch === "ON";
      return data;
    } else {
      data["execution"] = data.switch === "ON" && data.startTime === JapanTime;
      return data;
    }
  });

  return executionCheckedProcessingsData;
};

module.exports = executionCheck;
