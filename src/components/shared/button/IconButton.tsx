import { classNames } from '@/utils/helper';
import BaseButton, { BaseButtonProps } from './BaseButton';

export default function IconButton(props: BaseButtonProps) {
  const { className, children, ...extraProps } = props;
  const { disabled } = extraProps;

  return (
    <BaseButton
      {...extraProps}
      className={classNames(
        'p-1.5',
        disabled
          ? ''
          : 'bg-primary hover:bg-primary-600 text-white border-primary',
        className
      )}
    >
      {children}
    </BaseButton>
  );
}
