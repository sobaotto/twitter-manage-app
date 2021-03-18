"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const add = document.getElementById("add");
const get = document.getElementById("get");
const ul = document.getElementById("data");

add.addEventListener("click", () => {
  collection.add({
    createdAt: new Date(),
    manageName: "予約投稿！",
  });
});

get.addEventListener("click", async () => {
  const snapshot = await collection.get();
  snapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().test;
    ul.appendChild(li);
  });
});
