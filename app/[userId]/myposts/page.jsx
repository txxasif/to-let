import { getPropertiesByUserId } from "@/actions/temp";
import UserProperties from "./userposts";
export default async function MyPosts({ params }) {
  console.log(params);
  const myPosts = await fetch(
    `${process.env.URL}/api/property/user?id=${params.userId}`,
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .then((data) => data.data);

  if (!myPosts) {
    return <h1>Loai</h1>;
  }

  return (
    <div>
      <UserProperties properties={myPosts} />
    </div>
  );
}
