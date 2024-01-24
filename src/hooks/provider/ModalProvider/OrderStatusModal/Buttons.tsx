import { useNavigate } from 'react-router-dom';
import ButtonFilled from '@/components/shared/button/ButtonFilled';
import ButtonOutline from '@/components/shared/button/ButtonOutline';

interface ButtonsProps {
  onBtnClick: () => void;
}
export default function Buttons({ onBtnClick }: ButtonsProps) {
  // Navigator
  const navigate = useNavigate()

  const handleViewOrderClick = () => {
    navigate('/orders');
    onBtnClick();
  };
  
  const handleContinueClick = () => {
    navigate('/products');
    onBtnClick();
  };

  return (
    <div className="flex justify-between gap-8 mt-8">
      <ButtonOutline onClick={handleViewOrderClick}>View Order</ButtonOutline>
      <ButtonFilled onClick={handleContinueClick}>
        Continue Shopping
      </ButtonFilled>
    </div>
  );
}
