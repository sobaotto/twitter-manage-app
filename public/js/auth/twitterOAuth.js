"use strict";

const twitterOAuth = () => {
  const provider = new firebase.auth.TwitterAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const uid = result.user.uid;
      const screenName = result.additionalUserInfo.profile.screen_name;
      const accessTokenKey = result.credential.accessToken;
      const accessTokenSecret = result.credential.secret;
      const timestamp = new Date();

      const userData = {
        uid: uid,
        screenName: screenName,
        accessTokenKey: accessTokenKey,
        accessTokenSecret: accessTokenSecret,
        createdAt: timestamp,
        updatedAt: timestamp,
      };

      return userData;
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });
};

export default twitterOAuth;
