import ButtonFilled from '@/components/shared/button/ButtonFilled';
import ButtonOutline from '@/components/shared/button/ButtonOutline';

interface ControlButtonsProps {
  onCancelClick: () => void;
  onConfirmClick: () => void;
  confirmBtnDisabled: boolean;
}

export default function ControlButtons({
  onCancelClick,
  onConfirmClick,
  confirmBtnDisabled,
}: ControlButtonsProps) {

  return (
    <div className="flex justify-between mt-4">
      <ButtonOutline onClick={onCancelClick}>Cancel</ButtonOutline>
      <ButtonFilled onClick={onConfirmClick} disabled={confirmBtnDisabled}>
        Confirm
      </ButtonFilled>
    </div>
  );
}
