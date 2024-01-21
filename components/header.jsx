import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-fit py-4 px-2 bg-[#1E1E1E]">
      <Image className="" src={"/logo.png"} height={100} width={100} />
    </div>
  );
}
