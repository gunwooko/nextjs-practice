"use server";
import { z } from "zod";

const passwordRegex = new RegExp(/^(?=.*\d).+$/);

const formSchema = z.object({
  username: z.string().min(5, "Username is too short!"),
  email: z
    .string()
    .email()
    .refine((email) => email.includes("@zod.com"), "Only allowed @zod.com"),
  password: z
    .string()
    .min(10, "Password is too short!")
    .regex(passwordRegex, "Password must contain at least 1 number"),
});

export const onSubmit = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    return { success: result.success, data: result.data };
  }
};
