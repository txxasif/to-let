import { getPropertiesByUserId } from "@/actions/temp";
import UserProperties from "./userposts";
export default async function MyPosts({ params }) {
  console.log(params);
  const myPosts = await getPropertiesByUserId(params.userId);
  console.log(myPosts);
  if (!myPosts) {
    return <h1>Loai</h1>;
  }

  return (
    <div>
      <UserProperties properties={myPosts.data} />
    </div>
  );
}
