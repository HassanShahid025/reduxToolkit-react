import {FaChevronUp, FaChevronDown} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cart';

export interface IProps {
    id:string;
    img:string;
    title:string;
    price:string;
    amount:number;
}

export const Cartitem = ({id,img,title,price,amount}:IProps) => {
    const dispatch = useDispatch();
    return(
        <article className="cart-item">
            <div>
                <img src={img} alt="" />
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={()=>{removeItem(id)}}>remove</button>
            </div>
            <div>
                <button className="amount-btn" onClick={()=>{
                    dispatch(increase(id))
                }}>
                    <FaChevronUp/>
                </button>
                <p className='amount'>{amount}</p>
                <button className="amount-btn" onClick={()=>{
                    dispatch(decrease(id))
                }}>
                    <FaChevronDown/>
                </button>
            </div>
        </article>
    )
}