import {FaChevronUp, FaChevronDown} from 'react-icons/fa'

interface IProps {
    id:string;
    img:string;
    title:string;
    price:string;
    amount:number;
}

export const Cartitem = ({id,img,title,price,amount}:IProps) => {
    return(
        <article className="cart-item">
            <div>
                <img src={img} alt="" />
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn">remove</button>
            </div>
            <div>
                <button className="amount-btn">
                    <FaChevronUp/>
                </button>
                <p className='amount'>{amount}</p>
                <button className="amount-btn">
                    <FaChevronDown/>
                </button>
            </div>
        </article>
    )
}