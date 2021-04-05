"use script";

import twitterSignin from "./sign/signin.js";
import twitterSignout from "./sign/signout.js";
import twitterSignup from "./sign/signup.js";

// 「const auth = firebase.auth();」のインスタンスに関して
// ①バケツリレーで関数に渡して行く方がいいか？
// ②各関数の中でそれぞれ呼び出した方がいいか？

twitterSignin();
twitterSignup();
// twitterSignout();
