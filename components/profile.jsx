import UserMap from "./user-map";

export default function Profile({ user }) {
  return (
    <div className="space-y-1">
      <div>
        <UserMap />
      </div>
    </div>
  );
}
