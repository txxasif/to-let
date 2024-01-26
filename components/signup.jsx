"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { SpinnerButtonServer } from "./ui/serverbutton";
import { Input } from "./ui/input";
import { createUser } from "@/model/user.model";
import { redirect } from "next/navigation";
const initialState = null;
export default function SignUp() {
  const [state, formAction] = useFormState(createUser, initialState);

  useEffect(() => {
    if (state?.success) {
      redirect("/login");
    }
  });

  return (
    <form action={formAction} className="flex flex-col space-y-2">
      <input
        className="border-b px-1 py-2"
        required
        type="text"
        name="name"
        placeholder="Enter Your Name"
      />
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
        type="number"
        name="phone"
        placeholder="Enter Your Phone Number"
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
