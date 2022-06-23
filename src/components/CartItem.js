import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {

   const dispatch= useDispatch();

  const decrement=()=>{
    dispatch(cartActions.removeFromCart(id));
  }

  const increment=()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrement} className="cart-actions">  - </button>
      <button onClick={increment} className="cart-actions"> + </button>
    </div>
  );
};

export default CartItem;
