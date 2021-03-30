const fetchUsersData = require("./functions/execution/executionProcessings.js");

(async () => {
  const a = await fetchUsersData();
  console.log(a);
})();
