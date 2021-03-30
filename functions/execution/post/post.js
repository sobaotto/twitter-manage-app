const Twitter = require("twitter");

const post = async (twitterApiKey, postContent) => {
  const client = new Twitter(twitterApiKey);

  console.log(twitterApiKey);

  const result = await client.post("statuses/update", { status: postContent });

  console.log("ツイート成功");

  return result;
};

module.exports = post;
