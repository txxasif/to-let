import { Roboto, Public_Sans, Open_Sans } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const publicSans = Public_Sans({
  subsets: ["latin"],
});
export const openSans = Open_Sans({
  subsets: ["cyrillic"],
});
