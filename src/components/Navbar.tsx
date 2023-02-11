import {BsCart} from 'react-icons/bs'
import {useSelector} from 'react-redux'
import { RootState } from '../store';


export const Navbar = () => {

    const { amount } = useSelector((store:RootState) => store.cart);
    
    return(
        <nav>
            <div className="nav-center">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <BsCart/>
                </div>
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </nav>
    )
} 