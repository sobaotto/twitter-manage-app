"use script";

const getEditingFunctionId = (editItem) => {
  const editTarget = document.getElementById("editTarget");

  const selectedIndex = editTarget.selectedIndex;
  const editingFunctionName = editTarget.options[selectedIndex].value;

  const functionData = editItem.find(
    (functionData) => functionData.functionName === editingFunctionName
  );

  if (functionData) {
    return functionData.id;
  }
};

export default getEditingFunctionId;
