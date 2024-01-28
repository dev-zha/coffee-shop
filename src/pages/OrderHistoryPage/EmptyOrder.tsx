import { useNavigate } from 'react-router-dom';
import ButtonFilled from '@/components/shared/button/ButtonFilled';
import { useModal } from '@/hooks/useModal';

export default function EmptyOrder() {
  // Router
  const navigate = useNavigate();
  // Modal Provider
  const { closeCartModal } = useModal();

  const handleContinueClick = () => {
    navigate('/products');
    closeCartModal();
  };

  return (
    <div className="h-full flex flex-col justify-center items-center text-center">
      <img
        src="/images/empty-folder.png"
        className="w-1/2 md:w-1/3"
        alt="Empty Folder"
      />
      <h3 className="text-primary-800/80 text-2xl font-bold mb-4">
        Your Order History is Empty
      </h3>
      <pre className="text-primary-400 text-sm font-medium mb-4">{`Looks like you haven't order anything\nlet go some shopping.`}</pre>
      <ButtonFilled onClick={handleContinueClick}>
        Continue Shopping
      </ButtonFilled>
    </div>
  );
}
