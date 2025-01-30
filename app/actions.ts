"use server";

export const onSubmit = async (formData: FormData) => {
  formData.get("email");
  console.log("onSubmit", formData.get("email"));

  if (formData.get("password") === "12345") {
    return { errors: ["wrong password"] };
  } else {
    return { success: true };
  }
};
