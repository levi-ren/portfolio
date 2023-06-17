"use client";

import { FormEventHandler, ReactNode, useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";
import Anchor from "./anchor";

interface FormProps {
  children: ReactNode;
}

const Form = ({ children }: FormProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setLoading(true);
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
    })
      .then((e) => {
        setName(formData.get("name")?.toString() || "");
        setStatus(e.status);
        dialog.current && !dialog.current.open && dialog.current.showModal();
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <form onSubmit={onSubmit} className="m-auto max-w-md space-y-8 py-8">
        {children}

        <button
          className="m-auto flex h-[50px] w-[150px] items-center justify-center rounded-full border-2 border-black/70 text-xs transition-[border] duration-300 dark:border-slate-50/20"
          disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="h-5 w-5 animate-spin " />
          ) : (
            "SEND MESSAGE"
          )}
        </button>
      </form>

      <dialog
        ref={dialog}
        className="animate-fade bg-transparent    p-0 font-mono text-xl transition-all backdrop:bg-black/70 backdrop:backdrop-blur-sm dark:text-white "
        onClick={(e) => e.currentTarget.close()}
      >
        <div
          className="w-full max-w-md space-y-6 rounded border border-slate-50/20  bg-white/90 p-4 pt-16 shadow-lg backdrop-blur-3xl dark:bg-black/90"
          onClick={(e) => e.stopPropagation()}
        >
          <p>Hi there, {name}!</p>
          {status === 200 && (
            <p>
              Thank you for your message, I will get back to you as soon as I
              can.
            </p>
          )}
          {status === 429 && (
            <>
              <p>
                Apologies, you can only send one message per day. Please try
                again tomorrow or send me an email at
              </p>
              <Anchor
                aria-label="Email link"
                href="mailto:arron.levi1@gmail.com"
                className="block underline"
              >
                arron.levi1@gmail.com
              </Anchor>
            </>
          )}
          {status === 500 && (
            <p>
              Well this is awkward. Something went wrong, please try again
              later.
            </p>
          )}
          <p>-Levi</p>

          <form method="dialog" className="absolute right-2 top-2 !m-0 ">
            <button>
              <IoCloseOutline className="h-6 w-6" />
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Form;
