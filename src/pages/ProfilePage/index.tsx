import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DataCards from './DataCards';
import UserInfo from './UserInfo';
import LogoutBtn from './LogoutBtn';

export default function ProfilePage() {
  // Auth Provider
  const { user } = useAuth();
  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  if (!user) {
    return <p>Error</p>;
  }

  return (
    <div className="mx-2">
      <div className="relative flex flex-col items-center max-w-lg bg-gray-200 rounded-2xl p-4 sm:p-8 my-2 sm:my-8 mx-auto">
        <UserInfo user={user} />
        <LogoutBtn />
        <DataCards />
      </div>
    </div>
  );
}
