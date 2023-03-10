import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import './App.css';
import { Cartcontainer } from './components/Cartcontainer';
import { Navbar } from './components/Navbar';
import { AppDispatch, RootState } from './store';
import { calculateTotals, getCartItems } from './features/cart/cart';
import { Modal } from './components/Modal';
function App() {

  const { cartItems, isLoading } = useSelector((store:RootState) => store.cart)

   const useAppDispatch : () => AppDispatch = useDispatch
  const dispatch = useAppDispatch()

  const { isOpen } = useSelector((store:RootState) => store.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <Cartcontainer/>
    </main>
  );
}

export default App;
