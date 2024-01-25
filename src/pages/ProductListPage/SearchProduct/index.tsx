import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useProduct } from '@/hooks/useProduct';
import { CoffeeProduct } from '@/types';
import ProductCardSmall from '@/components/shared/card/ProductCardSmall';
import CategoryTitle from '../CategoryTitle';
import { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { XMarkIcon } from '@heroicons/react/24/outline';
import NoSearchResult from './NoSearchResult';
import SearchResults from './SearchResults';
import SearchInput from './SearchInput';

const useProductFilter = (coffees: CoffeeProduct[], keyword: string) => {
  const [data, setData] = useState<CoffeeProduct[]>([]);

  useEffect(() => {
    if (keyword) {
      const results = coffees?.filter((item) =>
        item.displayName.toLowerCase().includes(keyword.toLowerCase())
      );
      setData(results);
    } else {
      setData([]);
    }
  }, [keyword]);

  return data;
};

export default function SearchProduct() {
  // Product Provider
  const { coffees } = useProduct();
  // Local State
  const [keyword, setKeyword] = useState('');
  const deferredKw = useDebounce(keyword);
  const searchResult = useProductFilter(coffees, deferredKw);

  const handleInputChange = (value: string) => {
    setKeyword(value);
  };

  const handleClearInput = () => {
    setKeyword('');
  };

  return (
    <div>
      <SearchInput
        value={keyword}
        onChange={handleInputChange}
        onClear={handleClearInput}
      />
      {deferredKw && (
        <div className="bg-gray-200 p-3 mt-2 rounded-2xl">
          <CategoryTitle>Search Results : </CategoryTitle>
          {searchResult?.length > 0 ? (
            <SearchResults coffees={searchResult} />
          ) : (
            <NoSearchResult />
          )}
        </div>
      )}
    </div>
  );
}
