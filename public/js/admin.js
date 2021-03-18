"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const table = document.querySelector("table");

collection
  .orderBy("createdAt")
  .get()
  .then((snapshot) => {
    // forEachでindexを第二引数に指定すると「undefined」になってしまう。2021/03/17

    let Number = 0;

    snapshot.forEach((doc) => {
      // console.log(doc.id);

      const functionTr = document.createElement("tr");
      const functionNumberTd = document.createElement("td");
      const functionNameTd = document.createElement("td");

      const editButtonTd = document.createElement("button");
      const deleteButtonTd = document.createElement("button");
      const editATd = document.createElement("a");
      editATd.href = "./edit.html";

      Number++;

      functionNumberTd.textContent = Number;
      functionNumberTd.classList.add("text-center");
      functionTr.appendChild(functionNumberTd);

      functionNameTd.textContent = doc.data().functionName;
      functionTr.appendChild(functionNameTd);

      editButtonTd.textContent = "編集";
      editATd.appendChild(editButtonTd);
      functionTr.appendChild(editATd);

      deleteButtonTd.textContent = "削除";
      deleteButtonTd.id = "delete";
      deleteButtonTd.value = doc.id;
      // console.log(deleteButtonTd.value);
      functionTr.appendChild(deleteButtonTd);

      table.appendChild(functionTr);
    });
  });

const deleteButton = document.getElementById("delete");

console.log(deleteButton);

deleteButton.addEventListener("click", () => {
  console.log("Aaaaa");
  collection
    .doc(deleteButton.value)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
});
