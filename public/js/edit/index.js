"use script";

import deleteFunction from "./deleteFunction.js";
import getEditingFunctionId from "./getEditingFunctionId.js";
import getFormValue from "./getFormValue.js";
import updateFunction from "./updateFunction.js";

// firestoreの初期化
const db = firebase.firestore();
const collection = db.collection("functions");

const editTarget = document.getElementById("editTarget");

// 処理名と処理のdoc.idを格納する
const functions = [];

// データベースから処理名を取得し、プルダウンで表示
collection
  .orderBy("updatedAt", "desc")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const functionData = {
        id: doc.id,
        functionName: doc.data().functionName,
      };

      const functionNameOption = document.createElement("option");

      functionNameOption.textContent = functionData.functionName;
      editTarget.appendChild(functionNameOption);

      functions.push(functionData);
    });
  })
  .then(() => {
    // console.log(`editingFunctionId:${editingFunctionId}`);

    // updateFunction(editingFunctionId);

    deleteFunction(functions);
  });
