import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import InputFiled from "@/components/formfield";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default async function Settings({ params }) {
  const session = await getServerSession(authOptions);
  async function upload(data) {
    "use server";
    console.log(data.get("photo"));
  }

  if (!session) {
    return redirect("/login");
  }
  console.log(session.user);

  return (
    <main className="w-full ">
      <form
        action={upload}
        className="w-fit mx-auto mt-[5%] space-y-2 border p-2"
      >
        <Image className="w-fit" src="/profile.png" width={250} height={100} />
        <InputFiled placeholder="" type="text" className="border" name="asif" />
        <InputFiled type="file" name="photo" />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}
