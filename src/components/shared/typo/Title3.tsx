import { classNames } from '@/utils/helper';
import { TitleProps } from './type';

export default function Title3({ children, className }: TitleProps) {
  return (
    <h3 className={classNames('text-xl font-semibold', className)}>
      {children}
    </h3>
  );
}
