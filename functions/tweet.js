const Twitter = require("twitter");
const oAuth = require("./keys");

const tweet = (postContent) => {
  const client = new Twitter({ ...oAuth });

  client.post(
    "statuses/update",
    { status: postContent },
    (error, tweet, response) => {
      if (error) throw error;
      console.log(tweet);
    }
  );

  return null;
};

module.exports = tweet;
