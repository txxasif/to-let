import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="w-full h-fit py-4 px-4 bg-[#1E1E1E] flex justify-between items-center">
      <Image className="" src={"/logo.png"} height={100} width={100} />
      <div className="text-[#1CBCBF] space-x-2">
        {session ? (
          <>
            <Link
              className="border px-2 py-1 rounded-sm"
              href={`/${session.user._id}`}
            >
              Profile
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
