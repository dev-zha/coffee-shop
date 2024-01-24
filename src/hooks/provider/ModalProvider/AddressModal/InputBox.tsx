import React from 'react';
import LoadingSpinner from '@/components/shared/LoadingSpinner';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}

export default function InputBox({
  value,
  onChange,
  isLoading,
}: InputBoxProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-1">
        Your Address
      </label>
      <div className="inline-flex justify-between gap-2 w-full bg-gray-50 text-gray-900 text-sm rounded-lg border border-gray-300 p-2.5">
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          value={value}
          onChange={handleInputChange}
          placeholder="Add your Street and House Number"
        />
        {isLoading && <LoadingSpinner sm />}
      </div>
    </div>
  );
}
