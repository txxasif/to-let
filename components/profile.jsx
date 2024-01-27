import ProfileCard from "./profile-card";
import UserMap from "./user-map";

export default function Profile({ user }) {
  return (
    <div className="space-y-1">
      <ProfileCard user={user} />
      <div>
        <UserMap />
      </div>
    </div>
  );
}
