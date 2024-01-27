import Image from "next/image";
import { PhoneSvg } from "@/icons/icons";
export default function ProfileCard({ user }) {
  const { name, photo, phone } = user;
  return (
    <div className="w-fit flex border p-3 shadow-lg space-x-3 rounded-sm">
      <Image className="rounded-full" src={photo} width={100} height={100} />
      <div>
        <h1 className="text-6xl">{name}</h1>
        <div className="flex items-center  space-x-2 space-y-2">
          <PhoneSvg className="w-10 h-10" />
          <h1 className="text-4xl">{phone}</h1>
        </div>
      </div>
    </div>
  );
}
