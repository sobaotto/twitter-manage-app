const Twitter = require("twitter");
const oAuth = require("../keys/authKeys.json");

const tweet = async (postContent) => {
  const client = new Twitter(oAuth);

  const result = await client.post("statuses/update", { status: postContent });

  return result;
};

module.exports = tweet;
