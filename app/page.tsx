"use client";

import { ReactNode } from "react";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import FormButton from "@/components/Button";
import { onSubmit } from "./actions";

export default function Home() {
  const [state, action] = useFormState(onSubmit, {} as any);

  return (
    <div className="flex flex-col items-center min-h-screen gap-5 py-8">
      <div className="size-11 my-10">
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
          ></path>
        </svg>
      </div>

      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          name="email"
          type="Email"
          placeholder="Email"
          required
          errors={[]}
          icon={<EnvelopeIcon className="size-5 absolute ml-3 text-gray-400" />}
        />
        <FormInput
          name="username"
          type="Username"
          placeholder="Username"
          required
          errors={[]}
          icon={<UserIcon className="size-5 absolute ml-3 text-gray-400" />}
        />
        <FormInput
          name="password"
          type="Password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
          icon={<KeyIcon className="size-5 absolute ml-3 text-gray-400" />}
        />
        <FormButton text="Log in" />
      </form>
    </div>
  );
}

type FormInputProps = {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  icon: ReactNode;
  name: string;
};

function FormInput({
  type,
  placeholder,
  required,
  errors,
  icon,
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        {icon}
        <input
          name={name}
          className="pl-10 bg-transparent rounded-full w-full h-10 ring-2 outline-gray-200 focus:ring-4 transition ring-neutral-200 focus:ring-gray-300 placeholder:text-neutral-400"
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
