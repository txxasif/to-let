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
    try {
      await signIn("credentials", { ...data, redirect: false });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (state?.success) {
      afterSuccess(state.data);
    }
    if (status === "authenticated") {
      redirect("/");
    }
  }, [state, status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
        </div>
        <form className="mt-8 space-y-6" action={formAction}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent block w-full px-3 py-2 rounded-md shadow-sm"
            placeholder="Email address"
          />
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent block w-full px-3 py-2 rounded-md shadow-sm mt-2"
            placeholder="Password"
          />
          {state?.error && (
            <p className="text-red-500 text-xs mt-1">{state.message}</p>
          )}
          <div>
            <SpinnerButtonServer
              name="Submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
