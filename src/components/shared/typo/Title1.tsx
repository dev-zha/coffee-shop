import { classNames } from '@/utils/helper';

interface Title1Props {
  children: string;
  className?: string;
}
export default function Title1({ children, className }: Title1Props) {
  return (
    <h1 className={classNames('text-gray-800 text-2xl font-semibold', className)}>
      {children}
    </h1>
  );
}
