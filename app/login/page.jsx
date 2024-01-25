"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

import { checkUser } from "@/model/user.model";
import { SpinnerButtonServer } from "@/components/ui/serverbutton";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const initialState = null;
export default function SignUp() {
  const [state, formAction] = useFormState(checkUser, initialState);
  const { status } = useSession();
  async function afterSuccess(data) {
    console.log(data);
    try {
      await signIn("credentials", { ...data, redirect: false });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(status);
    if (state?.success) {
      afterSuccess(state.data);
    }
    if (status === "authenticated") {
      redirect("/");
    }
  }, [state, status]);

  return (
    <form action={formAction} className="flex flex-col space-y-2">
      <input
        className="border-b px-1 py-2"
        required
        type="text"
        name="email"
        placeholder="Enter Your Email"
      />
      <input
        className="border-b px-1 py-2"
        required
        type="password"
        name="password"
        placeholder="Enter Your Password"
      />
      {state?.error ? <h1>{state.message}</h1> : null}
      <SpinnerButtonServer name={"Submit"} className="self-center" />
    </form>
  );
}
