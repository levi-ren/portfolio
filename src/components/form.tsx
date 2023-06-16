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
      <form onSubmit={onSubmit} className="max-w-md m-auto py-8 space-y-8">
        {children}

        <button
          className="text-xs rounded-full border dark:border-slate-50/20 border-black/70 h-[50px] w-[150px] justify-center m-auto flex items-center transition-[border] duration-300"
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
        className="backdrop:bg-black/70 backdrop:backdrop-blur-sm    dark:text-white bg-transparent p-0 font-mono text-xl transition-all animate-fade "
        onClick={(e) => e.currentTarget.close()}
      >
        <div
          className="space-y-6 rounded shadow-lg max-w-md w-full bg-white/90  dark:bg-black/90 backdrop-blur-3xl p-4 pt-16 border border-slate-50/20"
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

          <form method="dialog" className="absolute top-2 right-2 !m-0 ">
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
