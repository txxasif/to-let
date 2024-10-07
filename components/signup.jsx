"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { createUser } from "@/model/user.model";
import { SpinnerButtonServer } from "./ui/serverbutton";
import { Input } from "./ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserPlus } from "lucide-react";
import Link from "next/link";

const initialState = null;

export default function SignUp() {
  const [state, formAction] = useFormState(createUser, initialState);

  useEffect(() => {
    if (state?.success) {
      redirect("/login");
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-50 dark:bg-gray-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                required
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                required
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            {state?.error && (
              <Alert variant="destructive">
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <SpinnerButtonServer
              name="Create Account"
              className="w-full"
              icon={<UserPlus className="mr-2 h-4 w-4" />}
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
