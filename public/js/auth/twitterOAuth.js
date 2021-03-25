"use strict";

const twitterOAuth = async () => {
  const provider = new firebase.auth.TwitterAuthProvider();

  let userData = {};

  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const uid = result.user.uid;
      const screenName = result.additionalUserInfo.profile.screen_name;
      const accessTokenKey = result.credential.accessToken;
      const accessTokenSecret = result.credential.secret;
      const timestamp = new Date();

      userData = {
        uid: uid,
        screenName: screenName,
        accessTokenKey: accessTokenKey,
        accessTokenSecret: accessTokenSecret,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });

  return userData;
};

export default twitterOAuth;
