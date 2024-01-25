import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ButtonOutline from '@/components/shared/button/ButtonOutline';
import Title3 from '@/components/shared/typo/Title3';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

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
    <div className="flex flex-col items-center w-full py-20 px-10">
      <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto overflow-hidden">
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
    </div>
  );
}
