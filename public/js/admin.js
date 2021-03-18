"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const table = document.querySelector("table");

collection
  .orderBy("updatedAt", "desc")
  .get()
  .then((snapshot) => {
    // forEachでindexを第二引数に指定すると「undefined」になってしまう。2021/03/17

    let Number = 0;

    snapshot.forEach((doc) => {
      const functionTr = document.createElement("tr");
      const functionNumberTd = document.createElement("td");
      const functionNameTd = document.createElement("td");
      const switchTd = document.createElement("td");

      Number++;

      functionNumberTd.textContent = Number;
      functionNumberTd.classList.add("text-center");
      functionTr.appendChild(functionNumberTd);

      functionNameTd.textContent = doc.data().functionName;
      functionTr.appendChild(functionNameTd);

      switchTd.textContent = doc.data().switch;
      functionTr.appendChild(switchTd);

      table.appendChild(functionTr);
    });
  });
