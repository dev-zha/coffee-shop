import { classNames } from '@/utils/helper';
import { TitleProps } from './type';

export default function Title6({ children, className }: TitleProps) {
  return (
    <h6 className={classNames('text-base font-semibold', className)}>
      {children}
    </h6>
  );
}
