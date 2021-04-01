const Twitter = require("twitter");
const client = new Twitter({
  consumer_key: "Q9rXPFDujz2HoVdNNdhOUCAXm",
  consumer_secret: "zuPTQAWRuxt7lUJ09O0x0sKOdZSDDe7Klo47kVcNEwgop0Upul",
  access_token_key: "1301289140810469376-1j1i5QpVXBAy5wSGht4jKCnawuxIUf",
  access_token_secret: "09yastLM5nQaI96O2kKabAOevbbm7f1spSdufdIHk52nl",
});

client.get("search/tweets", { q: "ツウィ", count: 1 }).then((tweet) => {
  const screenName = tweet.statuses[0].user.screen_name;
  const tweetId = tweet.statuses[0].id_str;

  const replyMessage = "@" + screenName + "\n" + "cute!!";

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
});
