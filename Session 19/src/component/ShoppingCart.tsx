import React, { useMemo } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
  { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 2 },
  { id: 2, name: 'Sản phẩm B', price: 200000, quantity: 1 },
];

const ShoppingCart: React.FC = () => {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price.toLocaleString()}₫
          </li>
        ))}
      </ul>
      <h3>Tổng cộng: {totalPrice.toLocaleString()}₫</h3>
    </div>
  );
};

export default ShoppingCart;
