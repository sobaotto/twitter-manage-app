"use strict";

const changeForm = () => {
  const input_genders = document.querySelectorAll("input[name=processingType]");

  for (const element of input_genders) {
    element.addEventListener("change", () => {
      const input_gender = document.querySelector(
        "input[name=processingType]:checked"
      );

      const formType = document.querySelectorAll(".form-type");

      for (const element of formType) {
        element.classList.add("hidden");
      }
      console.log(input_gender.value);

      switch (input_gender.value) {
        case "post":
          const post = document.querySelectorAll(".post");
          for (const element of post) {
            element.classList.remove("hidden");
          }
          return input_gender.value;
        case "favorite":
          const favorite = document.querySelectorAll(".favorite");
          for (const element of favorite) {
            element.classList.remove("hidden");
          }
          return input_gender.value;
        case "reply":
          const reply = document.querySelectorAll(".reply");
          for (const element of reply) {
            element.classList.remove("hidden");
          }
          return input_gender.value;
      }
    });
  }
};

export default changeForm;
