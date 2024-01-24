import { classNames } from '@/utils/helper';

interface Title6Props {
  children: string;
  className?: string;
}
export default function Title6({ children, className }: Title6Props) {
  return (
    <h6
      className={classNames(
        'text-base font-semibold text-neutral-800',
        className
      )}
    >
      {children}
    </h6>
  );
}
