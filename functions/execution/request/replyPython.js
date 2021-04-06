const request = require("request-promise");

const replyPython = (twitterApiKey, searchWord, postContent) => {
  const options = {
    url: "hogehoge",
    method: "POST",
    form: {
      twitterApiKey: twitterApiKey,
      searchWord: searchWord,
      postContent: postContent,
    },
  };

  request(options)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = replyPython;
