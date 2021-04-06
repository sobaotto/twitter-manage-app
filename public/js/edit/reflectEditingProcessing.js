"use script";

const reflectEditingProcessing = (editItems) => {
  const editTarget = document.getElementById("editTarget");

  editTarget.addEventListener("change", () => {
    const selectedIndex = editTarget.selectedIndex;
    const editingProcessingName = editTarget.options[selectedIndex].value;

    const processingData = editItems.find(
      (processingData) =>
        processingData.processingName === editingProcessingName
    );

    console.log("reflectEditingProcessingの中", processingData);

    const processingName = document.getElementById("processingName");
    const startTime = document.getElementById("startTime");
    const searchWord = document.getElementById("searchWord");
    const maxCount = document.getElementById("maxCount");
    const tweet = document.getElementById("tweet");

    const onOffChoices = document.querySelectorAll("input[name=switch]");
    for (const onOffChoice of onOffChoices) {
      if (onOffChoice.value === processingData.switch) {
        onOffChoice.checked = true;
      }
    }

    const processingTypeChoices = document.querySelectorAll(
      "input[name=processingType]"
    );
    for (const processingTypeChoice of processingTypeChoices) {
      if (processingTypeChoice.value === processingData.processingType) {
        processingTypeChoice.checked = true;
      }
    }

    processingName.setAttribute("value", `${processingData.processingName}`);
    startTime.setAttribute("value", `${processingData.startTime}`);
    if (processingData.searchWord) {
      searchWord.setAttribute("value", `${processingData.searchWord}`);
    }
    if (processingData.maxCount) {
      maxCount.setAttribute("value", `${processingData.maxCount}`);
    }
    tweet.textContent = processingData.tweet;

    // 選択肢によってフォームの形を変える処理
    const selectedElement = document.querySelector(
      "input[name=processingType]:checked"
    );

    const uniqueFormItems = document.querySelectorAll(".form-type");

    for (const uniqueFormItem of uniqueFormItems) {
      uniqueFormItem.classList.add("hidden");
    }

    const switchForm = (selectedProcessing) => {
      const selectedProcessingElements = document.querySelectorAll(
        "." + selectedProcessing
      );
      for (const element of selectedProcessingElements) {
        element.classList.remove("hidden");
      }
    };

    switchForm(selectedElement.value);
  });
};

export default reflectEditingProcessing;
