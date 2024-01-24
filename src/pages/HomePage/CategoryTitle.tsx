import Title3 from '@/components/shared/typo/Title3';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface CategoryTitleProps {
  children: string;
}

export default function CategoryTitle({ children }: CategoryTitleProps) {
  return (
    <div className="flex items-center justify-between w-full mb-3">
      <Title3>{children}</Title3>
      <Link
        to="/products"
        className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
      >
        <span>All</span>
        <ChevronRightIcon className="w-5 h-5 stroke-2" />
      </Link>
    </div>
  );
}
