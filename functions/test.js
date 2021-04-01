const Twitter = require("twitter");
const client = new Twitter({
  consumer_key: "4k61k8hWUodsurjmC4tT4gDjS",
  consumer_secret: "doGeILOa8l0rsGY8F6qW94wYag1CYn0Hrxs44YIBNnLZ7AOFt1",
  access_token_key: "1019824555131527168-rBB5nIpOjjpsJdvWfEsn4z8voO6iNk",
  access_token_secret: "A7K4OCAt8ZGs0vfFsa3DnJtEYOQaByG3erZOVpwQZmsls",
});

client.get("search/tweets", { q: "node.js", count: 1 }).then((tweets) => {
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
