import UserAddressCard from './UserAddressCard';
import SearchBox from './SearchBox';
import PopularProductList from './PopularProductList';
import PopularHotDrinkList from './PopularHotDrinkList';
import PopularColdDrinkList from './PopularColdDrinkList';

export default function HomePage() {
  return (
    <div className="p-3">
      <UserAddressCard />
      <SearchBox />
      <PopularProductList />
      <PopularHotDrinkList />
      <PopularColdDrinkList />
    </div>
  );
}
