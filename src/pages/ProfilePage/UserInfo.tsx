import Title3 from '@/components/shared/typo/Title3';
import { AuthUser } from '@/types';

interface UserInfoProps {
  user: AuthUser;
}
export default function UserInfo({ user }: UserInfoProps) {
  return (
    <>
      <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
        <img
          src={user?.image}
          alt={`${user.name} Profile`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center mt-8">
        <Title3>{user?.name}</Title3>
        <p className="text-gray-500 mt-2">{user?.email}</p>
      </div>
    </>
  );
}
