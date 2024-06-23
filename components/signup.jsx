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
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Create Account
        </h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <Input
              id="name"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <Input
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              type="text"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          {state?.error ? (
            <h1 className="text-red-500 text-sm">{state.message}</h1>
          ) : null}
          <SpinnerButtonServer
            name="Submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
        </form>
      </div>
    </div>
  );
}
