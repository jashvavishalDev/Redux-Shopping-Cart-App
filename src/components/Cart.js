import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const Cart = () => {

  const quantity = useSelector(state=> state.cart.totalQuantity);
  const dispatch=useDispatch();

  const showCart=()=>{
       dispatch(cartActions.setShowCart());
  }
  
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
      
    </div>
  );
};

export default Cart;
