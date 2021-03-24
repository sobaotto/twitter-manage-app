const scheduledPost = require("./functions/scheduledPost/scheduledPost.js");

scheduledPost().then((result) => {
  console.log(result);
});
