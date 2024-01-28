import { classNames } from '@/utils/helper';
import { TitleProps } from './type';

export default function Title5({ children, className }: TitleProps) {
  return (
    <h3 className={classNames('text-base font-bold', className)}>
      {children}
    </h3>
  );
}
