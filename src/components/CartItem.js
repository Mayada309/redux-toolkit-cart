import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, toggle } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(toggle({ id, operation: 'increase' }))}
          className='amount-btn'
        >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(toggle({ id, operation: 'decrease' }));
          }}
          className='amount-btn'
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
