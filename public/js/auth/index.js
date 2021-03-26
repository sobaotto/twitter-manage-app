"use script";

import twitterSignin from "./singin.js";
import twitterSignout from "./singout.js.js";
import twitterSignup from "./singup";

// 「const auth = firebase.auth();」のインスタンスに関して
// ①バケツリレーで関数に渡して行く方がいいか？
// ②各関数の中でそれぞれ呼び出した方がいいか？

twitterSignin();
twitterSignup();
twitterSignout();
