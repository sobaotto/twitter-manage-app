"use script";

const getEditingProcessingId = (editItem) => {
  const editTarget = document.getElementById("editTarget");

  const selectedIndex = editTarget.selectedIndex;
  const editingProcessingName = editTarget.options[selectedIndex].value;

  const processingData = editItem.find(
    (processingData) => processingData.processingName === editingProcessingName
  );

  if (processingData) {
    return processingData.id;
  }
};

export default getEditingProcessingId;
