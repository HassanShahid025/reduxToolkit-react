import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, increseItem, removeItem } from "../features/cart/cart";
import { ICartitem } from "../types";
import { ChevronDown, ChevronUp } from "./Icons";

export const Cartitem = ({ id, img, title, price, amount }: ICartitem) => {

    const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove btn */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => dispatch(increseItem(id))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => {
          if(amount === 1){
            dispatch(removeItem(id))
          }
          else{
            dispatch(decreaseItem(id))
          }
        }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
