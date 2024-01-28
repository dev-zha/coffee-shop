import { classNames } from '@/utils/helper';
import { TitleProps } from './type';

export default function Title1({ children, className }: TitleProps) {
  return (
    <h1 className={classNames('text-2xl font-bold', className)}>
      {children}
    </h1>
  );
}
