const fetchUsersData = require("./functions/fetchData/fetchUsersData.js");

(async () => {
  const a = await fetchUsersData();
  console.log(a);
})();
