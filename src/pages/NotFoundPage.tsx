import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ButtonOutline from '@/components/shared/button/ButtonOutline';
import Title3 from '@/components/shared/typo/Title3';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full py-20 px-10">
      <img
        src="/images/empty-folder.png"
        alt="404 Not Found"
        className="w-3/4 mx-auto"
      />
      <div className='text-center mt-2 mb-4'>
      <Title3>No Result Found</Title3>
      <p className='text-gray-500 mt-2'>We couldn't find what you are looking for.</p>
      </div>
      <ButtonOutline onClick={() => navigate(-1)} className='w-fit'>
        <span>Go Back</span>
        <ArrowRightIcon className="w-4 h-4" />
      </ButtonOutline>
    </div>
  );
}
