import { classNames } from '@/utils/helper';

interface Title3Props {
  children: string;
  className?: string;
}
export default function Title3({ children, className }: Title3Props) {
  return (
    <h3 className={classNames('text-gray-800 text-xl font-bold', className)}>
      {children}
    </h3>
  );
}
