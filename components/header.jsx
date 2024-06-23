"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data, status } = useSession();
  const currentUser = status === "authenticated" ? true : false;
  const currentUserId = data?.user._id;
  async function logOut() {
    await signOut();
  }

  return (
    <div className="w-full h-fit py-4 px-4 bg-[#1E1E1E] flex justify-between items-center">
      <Link className="border px-2 py-1 rounded-sm text-[#1CBCBF]  " href={"/"}>
        Home
      </Link>
      <div className="text-[#1CBCBF] space-x-2">
        {currentUser ? (
          <>
            <Link
              className="border px-2 py-1 rounded-sm"
              href={`/${currentUserId}`}
            >
              Profile
            </Link>
            <Link
              href={"#"}
              className="border px-2 py-1 rounded-sm"
              onClick={logOut}
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link className="border px-2 py-1 rounded-sm" href={"/login"}>
              Login
            </Link>
            <Link
              className="border px-2 py-1 rounded-sm"
              href={"/registration"}
            >
              Registration
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
