import React, { useState } from 'react'
import ShoppingBagSvg from '../assets/Shopingbag' 
import './cart-item.scss'
import CartDropdown from './CartDropdown'

function CartItem() {
    const [hidden,setHidden]= useState(false)

    const dropdown = () => {
      setHidden(!hidden)
    }
    
  return (
    <div className="cart-icon" onClick={dropdown}>
        <ShoppingBagSvg />
        {
            hidden? <CartDropdown />:null
        }
    </div>
  )
}

export default CartItem