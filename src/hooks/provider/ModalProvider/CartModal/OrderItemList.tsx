import { useShoppingCart } from '@/hooks/useShoppingCart';
import CartItemCard from '@/components/shared/card/CartItemCard';
import Title6 from '@/components/shared/typo/Title6';
import { classNames } from '@/utils/helper';

export default function OrderItemList() {
  // Shopping Cart
  const { items: cartItems } = useShoppingCart();
  const itemCount = cartItems.length;

  return (
    <div className='mt-4'>
      <Title6>Order Items</Title6>
      <ul>
        {cartItems?.map((cartItem, index) => (
          <li
            key={cartItem.product.id}
            className={classNames(
              'py-3',
              index !== itemCount - 1 ? 'border-b border-primary-200' : ''
            )}
          >
            <CartItemCard cartItem={cartItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
