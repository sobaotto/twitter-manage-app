const Twitter = require("twitter");

const post = (twitterApiKey, postContent) => {
  const client = new Twitter(twitterApiKey);

  client
    .post("statuses/update", { status: postContent })
    .then(() => {})
    .catch((e) => {
      console.error(e);
    });
};

module.exports = post;
