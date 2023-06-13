"use client";

import { FormEventHandler, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

const Form = ({ children }: FormProps) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body: Record<string, FormDataEntryValue> = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md m-auto py-8 space-y-8">
      {children}
    </form>
  );
};

export default Form;
