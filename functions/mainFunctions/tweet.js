const Twitter = require("twitter");
const oAuth = require("../keys/authKeys.json");

const tweet = async (postContent) => {
  const client = new Twitter(oAuth);

  await client.post(
    "statuses/update",
    { status: postContent },
    (error, tweet, response) => {
      if (error) throw error;
      console.log(tweet);
    }
  );
};

module.exports = tweet;
