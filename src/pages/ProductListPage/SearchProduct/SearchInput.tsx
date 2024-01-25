import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchInput({
  value,
  onChange,
  onClear,
}: SearchInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="inline-flex justify-between gap-2 w-full sm:w-80 bg-gray-100 text-gray-900 text-sm rounded-xl border border-gray-300 p-3">
      <MagnifyingGlassIcon className="h-5 w-5" />
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none"
        value={value}
        onChange={handleInputChange}
        placeholder="Search your drink..."
      />
      {!!value && (
        <button onClick={onClear} className="text-gray-600 hover:text-gray-900">
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
