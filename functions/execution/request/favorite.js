const Twitter = require("twitter");

const favorite = async (twitterApiKey, searchWord, count) => {
  const client = new Twitter(twitterApiKey);

  await client
    .get("search/tweets", { q: searchWord, count: count })
    .then((tweets) => {
      for (tweet of tweets.statuses) {
        client
          .post("favorites/create", { id: tweet.id_str })
          .then((tweet) => {
            console.log("Username: " + tweet.user.name);
            console.log("tweet: " + tweet.text);
            console.log("----------------");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
};

module.exports = favorite;
