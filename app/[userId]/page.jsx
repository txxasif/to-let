import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Profile from "@/components/profile";
export default async function Page({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <main className="container pt-4">
      <Profile />
    </main>
  );
}
