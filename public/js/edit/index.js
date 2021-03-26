"use script";

import deleteFunction from "./deleteFunction.js";
import updateFunction from "./updateFunction.js";
import editItem from "./editItem.js";
import monitorLoginStatus from "../auth/monitorLoginStatus.js";

const loginStatus = monitorLoginStatus();

if (loginStatus) {
  const db = firebase.firestore();

  editItem(db).then((editItem) => {
    updateFunction(db, editItem);
    deleteFunction(db, editItem);
  });
}
