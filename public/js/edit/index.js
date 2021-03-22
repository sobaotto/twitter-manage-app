"use script";

import deleteFunction from "./deleteFunction.js";
import updateFunction from "./updateFunction.js";
import editItem from "./editItem.js";

editItem().then((editItem) => {
  updateFunction(editItem);
  deleteFunction(editItem);
});
