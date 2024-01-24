import { classNames } from '@/utils/helper';

export interface BaseButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

export default function BaseButton({
  type = 'button',
  children,
  onClick,
  className,
  disabled = false,
}: BaseButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'focus:outline-none focus:ring-2 focus:ring-primary-200 rounded-lg',
        className,
        disabled
          ? 'bg-gray-500 border-gray-500 text-white cursor-not-allowed'
          : '',
      )}
    >
      {children}
    </button>
  );
}
