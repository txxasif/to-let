import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Profile({ params }) {
  const session = await getServerSession(authOptions);
}
