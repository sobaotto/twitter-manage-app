"use script";

const getEditingFunctionId = (functions) => {
  const editTarget = document.getElementById("editTarget");
  // console.log(editTarget);

  const selectedIndex = editTarget.selectedIndex;
  console.log(`selectedIndex:${selectedIndex}`);
  console.log(
    `editTarget.options[selectedIndex]:${editTarget.options[selectedIndex]}`
  );
  const editingFunctionName = editTarget.options[selectedIndex].value;

  functions.forEach((functionData) => {
    if (functionData.functionName === editingFunctionName) {
      console.log(`functionData.id:${functionData.id}`);
      return functionData.id;
    }
  });
};

export default getEditingFunctionId;
