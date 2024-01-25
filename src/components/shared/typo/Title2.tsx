import { classNames } from '@/utils/helper';

interface Title1Props {
  children: string;
  className?: string;
}
export default function Title2({ children, className }: Title1Props) {
  return (
    <h1 className={classNames('text-gray-800 text-xl font-semibold', className)}>
      {children}
    </h1>
  );
}
