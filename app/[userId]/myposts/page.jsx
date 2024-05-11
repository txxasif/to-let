import { getPropertiesByUserId } from "@/actions/temp";
import UserProperties from "./userposts";
export default async function MyPosts({ params }) {
  console.log(params);
  const myPosts = await fetch(
    `http:localhost:3000/api/property/user?id=${params.userId}`,
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .then((data) => data.data);

  console.log(myPosts);
  if (!myPosts) {
    return <h1>Loai</h1>;
  }

  return (
    <div>
      <UserProperties properties={myPosts} />
    </div>
  );
}
