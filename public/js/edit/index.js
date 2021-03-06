"use script";

import deleteFunction from "./deleteFunction.js";
import updateFunction from "./updateFunction.js";
import editItem from "./editItem.js";
import monitorLoginStatus from "../auth/monitorLoginStatus.js";

monitorLoginStatus().then(({ loginStatus, uid }) => {
  if (loginStatus) {
    const db = firebase.firestore();

    editItem(db, uid).then((editItem) => {
      updateFunction(db, editItem, uid);
      deleteFunction(db, editItem, uid);
    });
  }
});
