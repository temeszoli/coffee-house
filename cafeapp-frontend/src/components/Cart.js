import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Cart({ cart, setCart }){

  const [message, setMessage] = useState('');

    const increase = (name) => {
        const cartCopy = [...cart]
        const item = cartCopy.find(i => i.name === name)
        item.quantity += 1
        setCart(cartCopy)
      }
    
      const decrease = (name) => {
        let cartCopy = [...cart]
        const item = cartCopy.find(i => i.name === name)
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          cartCopy = cartCopy.filter(i => i.name !== name)
        }
        setCart(cartCopy)
      }

      const total = cart.reduce((acc, i) => acc + (i.quantity * i.price), 0).toFixed(2);

      /*if(user){
        total *= 0.9;
      }else{
        setMessage('Create an account for a 10% discount on your purchase.')
      }*/

    return(
        <div className='cart-container'>
            <h1>Shopping Cart</h1>
            <div>
              {cart.length > 0
              ? cart.map(item => (
                <div className='cart-item' key={item.name}>
                  <h3>{item.name}</h3>
                  <p>
                    <button onClick={() => decrease(item.name)}>-</button>
                    {item.quantity}
                    <button onClick={() => increase(item.name)}>+</button>
                  </p>
                  <p>Subtotal: <span className="money">${(item.quantity * item.price).toFixed(2)}</span> </p>
                </div>
                ))
              : <p>Add an item to your cart</p>}
            </div>
            <div className='total'>
                <h2>Total: <span className="money">${total}</span></h2>
                <Link to='/payment'><button className="btn">Proceed to checkout</button></Link>
                <p>{message}</p>
            </div>
        </div>
    );
}