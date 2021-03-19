const Twitter = require("twitter");
const oAuth = require("./keys");
const fetchData = require("./fetchFirestoreData");

const post = () => {
  const client = new Twitter({ ...oAuth });

  const params = { status: "焼き芋おいしい" };
  client.post("statuses/update", params, (error, tweet, response) => {
    if (error) throw error;
    console.log(tweet);
  });

  return null;
};

module.exports = post;
