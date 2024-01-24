import { ChevronLeftIcon } from '@heroicons/react/24/outline';

interface StickyModalHeaderProps {
  title: string;
  onClose: () => void;
}

export default function StickyModalHeader({
  title,
  onClose,
}: StickyModalHeaderProps) {
  return (
    <div className="sticky top-0 w-full bg-white px-2 py-3 border-b">
      <h2 className="text-center text-lg font-semibold text-neutral-800">
        {title}
      </h2>
      <button
        onClick={onClose}
        className="absolute top-3.5 left-3 text-gray-500 hover:text-gray-700"
      >
        <ChevronLeftIcon className="w-6 h-6 stroke-2" />
      </button>
    </div>
  );
}
