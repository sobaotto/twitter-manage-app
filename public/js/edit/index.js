"use script";

import deleteFunction from "./deleteFunction.js";
import updateFunction from "./updateFunction.js";
import editItem from "./editItem.js";

const db = firebase.firestore();

editItem(db).then((editItem) => {
  updateFunction(db, editItem);
  deleteFunction(db, editItem);
});
