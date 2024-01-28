import { classNames } from '@/utils/helper';
import { TitleProps } from './type';

export default function Title4({ children, className }: TitleProps) {
  return (
    <h3 className={classNames('text-lg font-semibold', className)}>
      {children}
    </h3>
  );
}
