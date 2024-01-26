import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Settings({ params }) {
  const session = await getServerSession(authOptions);
}
