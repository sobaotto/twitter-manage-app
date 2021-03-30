const fetchUsersData = require("./functions/fetchData/fetchUsersData.js");

(async () => {
  const usersData = await fetchUsersData();

  console.log(usersData);
})();
