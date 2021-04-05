const Twitter = require("twitter");

const post = async (twitterApiKey, postContent) => {
  const client = new Twitter(twitterApiKey);

  await client
    .post("statuses/update", { status: postContent })
    .then(() => {})
    .catch((e) => {
      console.error(e);
    });
};

module.exports = post;
