"use client";

import { useFormStatus } from "react-dom";

type FormButtonProps = {
  text: string;
};

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full h-10 bg-neutral-300 text-black font-medium rounded-3xl hover:bg-neutral-200 transition-colors disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
