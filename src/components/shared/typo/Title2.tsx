import { classNames } from '@/utils/helper';
import { TitleProps } from './type';

export default function Title2({ children, className }: TitleProps) {
  return (
    <h1 className={classNames('text-xl font-bold', className)}>
      {children}
    </h1>
  );
}
