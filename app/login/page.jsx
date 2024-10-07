"use client";

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { checkUser } from "@/model/user.model";
import { SpinnerButtonServer } from "@/components/ui/serverbutton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LogIn } from "lucide-react";
import Link from "next/link";

const initialState = null;

export default function SignIn() {
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
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
              />
            </div>
            {state?.error && (
              <Alert variant="destructive">
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <SpinnerButtonServer
              name="Sign In"
              className="w-full"
              icon={<LogIn className="mr-2 h-4 w-4" />}
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/registration" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
