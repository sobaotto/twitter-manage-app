"use script";

const getEditingProcessingId = (editItems) => {
  const editTarget = document.getElementById("editTarget");

  const selectedIndex = editTarget.selectedIndex;
  const editingProcessingName = editTarget.options[selectedIndex].value;

  const processingData = editItems.find(
    (processingData) => processingData.processingName === editingProcessingName
  );

  if (processingData) {
    return processingData.id;
  }
};

export default getEditingProcessingId;
