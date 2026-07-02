export type User = {
  id: string;
  name: string;
  email: string;
};

export type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </>
  );
}
