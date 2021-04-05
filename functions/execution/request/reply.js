const Twitter = require("twitter");

const reply = async (twitterApiKey, searchWord, postContent) => {
  const client = new Twitter(twitterApiKey);

  await client
    .get("search/tweets", { q: searchWord, count: 1 })
    .then((tweet) => {
      const screenName = tweet.statuses[0].user.screen_name;
      const tweetId = tweet.statuses[0].id_str;

      const replyMessage = "@" + screenName + "\n" + postContent;

      client
        .post("statuses/update", {
          status: replyMessage,
          in_reply_to_status_id: tweetId,
        })
        .then((reply) => {
          const targetScreenName = reply.entities.user_mentions[0].screen_name;

          console.log("targetScreenName: " + targetScreenName);
          console.log("reply: " + reply.text);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = reply;
