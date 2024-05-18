import React from 'react'
import {useCart} from "../contexts/CartProvider"
import CartItem from './CartItem'

function Cart() {

  const {cart} =useCart();
  // console.log(cart)
  return (
      <>
      {cart.map((cartItem)=>{
        <CartItem 
        key={cartItem.id} 
        />
      })}
    </>
  )
}

export default Cart
