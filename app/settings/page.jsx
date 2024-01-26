import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import InputFiled from "@/components/formfield";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SpinnerButtonServer } from "@/components/ui/serverbutton";
import { updateUserSettings } from "@/model/user.model";
export default async function Settings({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  const { phone, photo, _id } = session.user;
  console.log(phone);

  return (
    <main className="w-full ">
      <form
        action={updateUserSettings}
        className="w-fit mx-auto mt-[5%] space-y-2 border p-2"
      >
        <input defaultValue={_id.toString()} type="text" name="id" hidden />
        <Image
          className="w-full"
          src={photo ? photo : "/profile.png"}
          width={250}
          height={100}
        />
        <InputFiled
          placeholder={phone ? phone : "Enter Your Phone Number"}
          type="number"
          className="border"
          name="phone"
        />
        <InputFiled type="file" name="photo" />
        <SpinnerButtonServer name={"Submit"} className="w-full" />
      </form>
    </main>
  );
}
