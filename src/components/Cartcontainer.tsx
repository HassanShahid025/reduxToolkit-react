import { Cartitem } from "./Cartitem";
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from "../store";
import { clearCart } from "../features/cart/cart";



export const Cartcontainer = () => {
    const dispatch = useDispatch();
    const {cartItems,amount,total} = useSelector((store:RootState)=>store.cart);

    if(amount < 1){
        return(
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return(
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return(
                        <Cartitem key={item.id} {...item}/>
                    )
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" 
                onClick={() => dispatch(clearCart())}>
                    clear cart
                    </button>
            </footer>
        </section>
    )
}