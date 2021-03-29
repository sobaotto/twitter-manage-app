const Twitter = require("twitter");
const authKeys = require("../keys/authKeys.json");

const post = async (postContent) => {
  const client = new Twitter(authKeys);

  const result = await client.post("statuses/update", { status: postContent });

  return result;
};

module.exports = post;
