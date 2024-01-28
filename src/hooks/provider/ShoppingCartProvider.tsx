import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { CartItem, CoffeeProduct, DeliOption, PaymentMethod } from '@/types';
import ShoppingCartContext from '../context/ShoppingCartContext';
import { getSumFromArr } from '@/utils/helper';
import { defaultDeliFee } from '@/constants/constants';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliOption, setDeliOption] = useState(DeliOption.DELIVER);
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.CASH);

  const cartItemIds = items?.map((ci) => ci.product.id);
  const itemCount = items.length;
  const subTotal = getSumFromArr(
    items?.map((item) => item.product.price * item.quantity)
  );
  const deliFee = deliOption === DeliOption.DELIVER ? defaultDeliFee : 0;
  const totalPayment = subTotal + deliFee;

  const addToCart = (product: CoffeeProduct, quantity: number) => {
    if (!cartItemIds.includes(product.id)) {
      const newItem: CartItem = {
        product,
        quantity,
      };
      setItems((prevCart) => [...prevCart, newItem]);
    } else {
      updateQuantity(product.id, quantity);
    }
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setItems((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId) {
          const newItem: CartItem = {
            ...item,
            quantity: newQuantity,
          };
          return newItem;
        } else {
          return item;
        }
      })
    );
  };

  const removeFromCart = (productId: string) => {
    setItems((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const updateDeliOption = useCallback((value: DeliOption) => {
    setDeliOption(value);
  }, []);

  const updatePaymentMethod = useCallback((value: PaymentMethod) => {
    setPaymentMethod(value);
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addToCart,
      updateQuantity,
      removeFromCart,
      deliOption,
      updateDeliOption,
      subTotal,
      deliFee,
      totalPayment,
      paymentMethod,
      updatePaymentMethod,
      clearCart,
    }),
    [items, deliOption, paymentMethod]
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
