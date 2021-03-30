const Twitter = require("twitter");

const post = async (twitterApiKey, postContent) => {
  const client = new Twitter(twitterApiKey);

  const result = await client.post("statuses/update", { status: postContent });

  return result;
};

module.exports = post;
