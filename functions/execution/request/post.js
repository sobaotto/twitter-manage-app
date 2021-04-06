const Twitter = require("twitter");

const post = (twitterApiKey, postContent) => {
  return new Promise(async (resolve, reject) => {
    const client = new Twitter(twitterApiKey);

    await client
      .post("statuses/update", { status: postContent })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

module.exports = post;
