import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../store';
import { CartIcon } from './Icons';


export const Navbar = () => {

    const { amount } = useSelector((store:RootState) => store.cart);
    const dispatch = useDispatch()
    return(
        <nav>
            <div className="nav-center">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <CartIcon/>
                <div className="amount-container">
                    
                    <p className="total-amount">{amount}</p>
                </div>
                </div>
            </div>
        </nav>
    )
} 