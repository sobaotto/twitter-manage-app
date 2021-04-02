"use strict";

const changeForm = () => {
  const radioButtons = document.querySelectorAll("input[name=processingType]");

  for (const radioButton of radioButtons) {
    radioButton.addEventListener("change", () => {
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
  }
};

export default changeForm;
