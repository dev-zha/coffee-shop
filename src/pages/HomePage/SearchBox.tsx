import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function SearchBox() {
  return (
    <Link
      to="/products"
      className="w-full inline-flex justify-between bg-gray-100 hover:bg-primary-50 border text-gray-500 border-gray-300 rounded-2xl py-2 px-3 mt-6"
    >
      <div className="flex items-center gap-2">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span>Search your drink</span>
      </div>
    </Link>
  );
}
